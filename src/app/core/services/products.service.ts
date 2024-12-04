import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'http://localhost:3000/products'; // URL de l'API

  constructor(private http: HttpClient) { }

  getListProductsFromBackend(): Observable<Products[]> { //retour assynchrone
    // appel API
    return this.http.get<Products[]>(this.url);
  }
}
