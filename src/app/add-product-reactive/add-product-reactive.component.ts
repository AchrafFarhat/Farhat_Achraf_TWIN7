import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.scss']
})
export class AddProductReactiveComponent implements OnInit {
  myForm: FormGroup;
  productList: Product[] = [];

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
      price: new FormControl("",[Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]),
      description: new FormControl("", Validators.required),
      image: new FormControl(""),
      brand: new FormControl(""),
      categoryId: new FormControl("", Validators.required),
      promotion: new FormControl("", Validators.pattern('^(0|[1-9][0-9]?)$'))
    });
  }

  get name(){
    return this.myForm.get('name');
  }
  get description(){
    return this.myForm.get('description');
  }
  get price(){
    return this.myForm.get('price');
  }
  get image(){
    return this.myForm.get('image');
  }
  get brand(){
    return this.myForm.get('brand');
  }
  get categoryId(){
    return this.myForm.get('categoryId');
  }
  get promotion(){
    return this.myForm.get('promotion');
  }
  get categoryList(){
    return this.myForm.get('categoryList');
  }

  onSave() {
    if (this.myForm.valid) {
      const productData = this.myForm.value;
      console.log("Product saved:", productData);
      // Ajoutez le produit à une liste ou sauvegardez-le
    }

}
}

export class Product {
  id: number;
  name: string;
  image: string;
  categoryId: number;
  description: string;
  price: number;
  brand: string;
  promotion: number;
}
