import { Component, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/core/services/toast.service';
import { environment } from 'src/environments/environment';
declare var RazorpayCheckout: any;

@Component({
  selector: 'app-razorpay-payment',
  templateUrl: './razorpay-payment.components.html',
  styleUrls: ['./razorpay-payment.components.scss'],
})
export class RazorpayPaymentComponent implements OnInit, OnChanges {

  @Input() amount = 0;
  @Input() orderId = null;
  @Input() description = 'Buy subscription';

  razorPayOptions = {
    key: environment.RAZORPAY_KEY,
    amount: '',
    description: 'Buy subscription',
    order_id: '',//Order ID generated in Step 1
    currency: 'INR',
    theme: {
      color: '#44551c'
    },
    http_post: this.razorpayService,
    modal: {
      escape: false,
      ondismiss: async () => {
        await this.spinnerService.dismissLoading();
        console.log('Transaction cancelled.');
        this.toastService.presentErrorToast('Your transaction was cancelled, please retry again.')
      }
    },
  };

  dataForm = new FormGroup({
    amount: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    currency: new FormControl('INR'),
    orderId: new FormControl((Math.random() + 1).toString(36).substring(7))
  })
  @Output() paymentMade: EventEmitter<Boolean> = new EventEmitter();

  constructor(private zone: NgZone, private toastService: ToastService, private alertController: AlertController, private spinnerService: SpinnerService,
    private razorpayService: RazorpayService) { }


  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['amount'] && this.amount) {
      this.razorPayOptions.amount = this.amount.toString();
      this.razorPayOptions.description = this.description;
      this.dataForm.get('amount').setValue(this.amount);
      this.dataForm.get('orderId').setValue(this.orderId || (Math.random() + 1).toString(36).substring(7));
    }
  }

  async createRazorPay() {
    await this.spinnerService.presentLoading();
    // call api to create order_id
    this.razorpayService.createOrder(this.dataForm.value).subscribe({
      next: async (result: any) => {
        console.log("SUCCESS ORDER", result.data);
        this.razorPayOptions.order_id = result.data.value.id;

        RazorpayCheckout.on('payment.success', this.successCallback)
        RazorpayCheckout.on('payment.cancel', this.cancelCallback)
        RazorpayCheckout.open(this.razorPayOptions);
      },
      error: async (error) => {
        console.log("ERROR ORDER", error);
        await this.spinnerService.dismissLoading();
        this.toastService.presentErrorToast('Your transaction was cancelled, please retry again.')
      }
    })
  }
  cancelCallback = async (error) => {
    console.log('ERROR', error)
    await this.spinnerService.dismissLoading();
    this.toastService.presentErrorToast('Your transaction was cancelled, please retry again.')
  }
  successCallback = (response) => {
    console.log('RESPONSE handler', JSON.stringify(response))
    this.verifyPayment(response);
  };
  verifyPayment(response: any) {
    // call your backend api to verify payment signature & capture transaction
    let payload = {
      razorpay_order_id: response.razorpay_order_id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature,
      amount: this.dataForm.get('amount').value,
      currency: "INR",
    };
    this.razorpayService.verifyPayment(payload).subscribe({
      next: async (result: any) => {
        console.log("SUCCESS VERIFY", JSON.stringify(result));
        await this.spinnerService.dismissLoading();
        this.toastService.presentSuccessToast(result.message);
        if (result.data) {
          this.paymentMade.emit(true)
        }
      },
      error: async (error) => {
        console.log("ERROR VERIFY", error);
        await this.spinnerService.dismissLoading();
        this.toastService.presentErrorToast('Your transaction was cancelled, please retry again.');
      }
    })
  }



}
