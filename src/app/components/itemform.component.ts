import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Cart } from '../models';

@Component({
  selector: 'app-itemform',
  templateUrl: './itemform.component.html',
  styleUrls: ['./itemform.component.css']
})
export class ItemformComponent implements OnInit {

  // to take data from itemForm for submission to cart
  @Output()
  onNewAddToCart = new Subject<Cart>()

  itemForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: this.fb.control<string>('',[Validators.required, Validators.minLength(4)]),
      unitPrice: this.fb.control<number>(0.1,[Validators.required, Validators.min(0.1)]),
      quantity: this.fb.control<number>(1,[Validators.required, Validators.min(1)])
    })
  }

  processItemForm() {
    console.info("Add button clicked")
    console.info(">>> itemForm::", this.itemForm.value)
    const cart: Cart = this.itemForm.value as Cart
    this.onNewAddToCart.next(cart)
  }
  

}
