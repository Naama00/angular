import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, NgForOf],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  electricalProducts: any[] = [];
  priceAfterDiscount: any[] = [];
showTime:any=null;

  ngOnInit(): void {
    this.loadElectricalProducts();
    this.loadPriceAfterDiscount();
    this.addNewPrice();
    this.lucrativeDiscount();

  }
  loadElectricalProducts() {
    this.electricalProducts = [{ type: 'air-conditioner', company: 'Tadiran', description: 'white, 1.5 power.', price: 1700, discountPercents: 0.1 },
    { type: 'drying-mechine', company: 'Electrolux', description: 'white, 8 kg', price: 2500, discountPercents: 0.05 },
    { type: 'refrigerator', company: 'Sharp', description: 'black, 4 doors', price: 5000, discountPercents: 0.15 },
    { type: 'oven', company: 'Bosch', description: 'black, build-in', price: 2000, discountPercents: 0.05 },
    { type: 'mikrogal', company: 'Delongi', description: 'gray', price: 400, discountPercents: 0.2 }
    ];
  }
  loadPriceAfterDiscount() {
    for (let i = 0; i < this.electricalProducts.length; i++) {
      this.priceAfterDiscount[i] = this.electricalProducts[i].price * (1 - this.electricalProducts[i].discountPercents);
    }
  }
  addNewPrice() {
    for (let i = 0; i < this.electricalProducts.length; i++) {
      this.electricalProducts[i].priceAfterDiscount = this.priceAfterDiscount[i];
    }
  }
  lucrativeDiscount() {
    for (let i = 0; i < this.electricalProducts.length; i++) {
      this.electricalProducts[i].lucrativeDiscount = (this.electricalProducts[i].price - 300 > this.electricalProducts[i].priceAfterDiscount) ? 'lucrative discount!' : '';
    }
  }

showTimer(event:any){
this.showTime=event;
}


}