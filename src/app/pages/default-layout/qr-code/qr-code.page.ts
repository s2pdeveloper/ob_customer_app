import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScannerService } from 'src/app/core/services/barcode-scanner.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ShopService } from 'src/app/core/services/shop.service';
import { ToastService } from 'src/app/core/services/toast.service';
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  scanResult: any = null;
  scanActive: boolean = true;

  constructor(private barcodeScannerService: BarcodeScannerService, private location: Location, private router: Router,
    private shopService: ShopService, private loader: LoaderService, private toastService: ToastService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.startScan()
  }

  ionViewWillLeave() {
    document.body.style.backgroundColor =  'var(--ion-color-primary)';
    document.body.style.marginTop =  'env(safe-area-inset-top)';
    this.barcodeScannerService.stopScan()
  }

  async startScan() {
    this.scanActive = true;
    document.body.style.backgroundColor = "transparent";
    document.body.style.marginTop = '0';
    this.scanResult = await this.barcodeScannerService.startScan();
    this.scanActive = false;
    console.log('scan Result', this.scanResult)
    this.checkShop(this.scanResult);
  }

  stopScanner() {
    this.scanActive = false;
    document.body.style.backgroundColor =  'var(--ion-color-primary)';
    document.body.style.marginTop =  'env(safe-area-inset-top)';
    this.barcodeScannerService.stopScan()
  }

  goBack() {
    this.location.back();
  }

  async checkShop(code: string) {
    await this.loader.showLoader();
    this.shopService.checkQrCode({ code }).subscribe({
      next: async (value) => {
        await this.loader.hideLoader();
        this.router.navigate([`/shop-detail/${value.id}`])
      },
      error: async (error) => {
        await this.loader.hideLoader();
        this.toastService.errorToast(error)
      }
    })
  }

}
