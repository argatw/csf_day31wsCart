import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  _cart: Cart[] = []
  total = 0.0

  

  // add to cart page
  @Input()
  set cart(c: Cart[]) {
    this._cart = c
    this.calcTotal()
  }

  //delete from cart page
  @Output()
  onDeleteFromCart = new Subject<number>()

  deleteItem(idx: number) {
    console.info(">>> index:: ", idx)
    this.onDeleteFromCart.next(idx)
  }

  constructor() { }

  // calculate total
  ngOnInit(): void {
    this.calcTotal()
  }

  private calcTotal() {
    this.total = 0.0
    console.info(">>> calculating total now")
    for (let i of this._cart) {
      this.total += i.quantity * i.unitPrice
    }
    console.info(">>> total calculated is:: ",this.total)
  }

}
