import { Component } from '@angular/core';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent {
nom: string="TWIN";
listCategories= [];
titre: string = '';
categories: Categorie[] = [
  { id: 1, title: "Grand électroménager", image: "assets/images/categorie_electromenager.jpg", description: "uwegyued", available: true },
  { id: 2, title: "Petit électroménager", image: "assets/images/categorie_petit_electromenager.jpg", description: "salemou aalykom", available: true },
  { id: 3, title: "Produits informatiques", image: "assets/images/categorie_produits_informatiques.jpg", description: "barraaa zamer", available: true },
  { id: 4, title: "Smart Phones", image: "assets/images/categorie_smartPhone.jpg", description: "barra rabbi maak", available: true },
  { id: 5, title: "TV, images et son", image: "assets/images/categorie_tv_image_son.jpg", description: "", available: true },
  { id: 6, title: "Produits voiture", image: "assets/images/produits_nettoyages.jpg", description: "", available: false }
];
clickMe() {
throw new Error('Method not implemented.');
}
showDescription(description: string) {
  alert(description);
}


}
