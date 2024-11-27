import { Component, QueryList, ViewChildren } from '@angular/core';
import { Categorie } from '../models/categorie';
import { shortList } from '../models/shortList';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent {

nom: string="TWIN";
shortList: shortList[] = [];
listCategories= [];
titre: string = '';
categories: Categorie[] = [
  { id: 1, title: "Grand électroménager", image: "assets/images/categorie_electromenager.jpg", description: "uwegyued", available: true },
  { id: 2, title: "Petit électroménager", image: "assets/images/categorie_petit_electromenager.jpg", description: "sedwed wedff", available: true },
  { id: 3, title: "Produits informatiques", image: "assets/images/categorie_produits_informatiques.jpg", description: "desc desc", available: true },
  { id: 4, title: "Smart Phones", image: "assets/images/categorie_smartPhone.jpg", description: "ccccccc", available: true },
  { id: 5, title: "TV, images et son", image: "assets/images/categorie_tv_image_son.jpg", description: "", available: true },
  { id: 6, title: "Produits voiture", image: "assets/images/produits_nettoyages.jpg", description: "", available: false }
];
clickMe() {
throw new Error('Method not implemented.');
}

@ViewChildren(CardComponent) cardComponents!: QueryList<CardComponent>;

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

  ngAfterViewInit() {
    this.cardComponents.forEach((card) => {
      card.btnText = 'Add to shortlist';
    });
  }

  f(msg:any){
    console.log("btn clicked "+ msg.code + " "+ msg.id);
  }
  
}
