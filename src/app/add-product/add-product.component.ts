import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  p:Product = new Product;

  add(myform){
    console.log(this.p)
    console.log(myform)
  }

}
