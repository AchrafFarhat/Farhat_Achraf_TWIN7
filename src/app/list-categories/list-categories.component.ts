import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Categorie } from '../models/categorie';
import { shortList } from '../models/shortList';
import { CardComponent } from '../card/card.component';
import { CategoryService } from '../core/services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit, AfterViewInit {

nom: string="TWIN";
shortList: shortList[] = [];
listCategories= [];
titre: string = '';
categories: Categorie[] = [];
//on a injecté le service categoryService sous le nom de cs
constructor(private cs:CategoryService){}
ngOnInit(): void {
  //this.categories= this.cs.getListCategories(); //pour le retour synchrone
  this.cs.getListCategoriesFromBackend().subscribe(
    res => {
      this.categories = res;
      console.log('Categories fetched:', this.categories);
    },
    (error) => {
      console.error('Error fetching categories:', error);
    }
  ); //pour le retour assynchrone
}
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
