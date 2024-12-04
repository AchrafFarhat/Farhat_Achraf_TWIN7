import { Component } from '@angular/core';
import { Products } from '../models/products';
import { shortList } from '../models/shortList';
import { ProductsService } from '../core/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {

  listProducts : Products[]=[];
    
    shortList: shortList[] = [];

    constructor(private ps: ProductsService){}
    ngOnInit(): void {
      //this.categories= this.cs.getListCategories(); //pour le retour synchrone
      this.ps.getListProductsFromBackend().subscribe(
        res => {
          this.listProducts = res;
          console.log('Products fetched:', this.listProducts);
        }
  
      ); //pour le retour assynchrone
    }

    handleAddToShortlist(categoryId: number) {
      const idUser = 1; // valeur de votre choix
      if (!this.shortList.find(item => item.idElement === categoryId && item.idUser === idUser)) {
        const newItem = { id: Date.now(), idUser, idElement: categoryId, typeElement: 'category' };
        this.shortList.push(newItem);
        console.log("Added to shortlist:", newItem);
      } else {
        console.log("Item already in shortlist for this user.");
      }
    }
}
