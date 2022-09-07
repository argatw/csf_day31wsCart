import { Component } from '@angular/core';
import { Cart } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31WScart';
  cart: Cart[] = []

  newAdd(add: Cart) {
    console.info(">>> new add to cart: ",add)
    // ADD LINE HERE 
    this.cart = [ ...this.cart, add ]
  }

  newDelete(idx : number) {
    console.info("New delete clicked at idx:: ",idx)
    const tmp: Cart[] = [...this.cart]
    tmp.splice(idx,1)
    this.cart = tmp
  }

}
