import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/categorie';

@Injectable({
  providedIn: 'root' // une seule instance dans tte l'Application
})
export class CategoryService {
  private url = 'http://localhost:3000/categories'; // URL de l'API

  constructor(private http: HttpClient) { }

  getListCategories() :Categorie[]{ // retour synchrone
    return [
        { id: 1, title: "Grand électroménager", image: "assets/images/categorie_electromenager.jpg", description: "uwegyued", available: true },
        { id: 2, title: "Petit électroménager", image: "assets/images/categorie_petit_electromenager.jpg", description: "sedwed wedff", available: true },
        { id: 3, title: "Produits informatiques", image: "assets/images/categorie_produits_informatiques.jpg", description: "desc desc", available: true },
        { id: 4, title: "Smart Phones", image: "assets/images/categorie_smartPhone.jpg", description: "ccccccc", available: true },
        { id: 5, title: "TV, images et son", image: "assets/images/categorie_tv_image_son.jpg", description: "", available: true },
        { id: 6, title: "Produits voiture", image: "assets/images/produits_nettoyages.jpg", description: "", available: false }
    ];
  }
  getListCategoriesFromBackend(): Observable<Categorie[]> { //retour assynchrone
    // appel API
    return this.http.get<Categorie[]>(this.url);
  }
}
