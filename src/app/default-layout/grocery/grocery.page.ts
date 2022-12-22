import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.page.html',
  
  styleUrls: ['./grocery.page.scss'],
  
})
export class GroceryPage implements OnInit {
  product_list: any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  grocery(){
    
  }
  
  
  // incrementQty(index:number){
  //   this.product_list += 1;
  //   console.log(this.product_list + 1);
  //   }
  
  // decrementQty(index:number){
  //   /*. if item passed then item.qty. */
  //     if(this.product_list[index].qty-1 < 1){
  //       this.product_list[index].qty = 1;
  //       console.log('item_1-> ' + this.product_list[index].qty)
  //     }
  //     else{
  //       this.product_list[index].qty -= 1;
  //       console.log('item_2-> ' + index +  '  '+this.product_list[index].qty);
  //     }
  //     }
  
  
    }

