import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsQCategoryComponent } from './products-qcategory/products-qcategory.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { AddProductComponent } from './add-product/add-product.component';


// Define your routes here. Each route is an object with a path and a component to display.
//ce fichier a ete generé

const routes: Routes = [
  { 
    path: 'home', component: HomeComponent, children:
    [
      { path: 'getdetails/:id', component: DetailsCategoryComponent },
    ] 
  },

  { path: 'test', component: TestComponent},

  { path: 'add', component: AddProductComponent},

  //pathParam
  { path: 'details/:id', component: ProductsCategoryComponent },

  //QueryParam
  { path: 'details', component: ProductsQCategoryComponent },

  { 
    path: 'products', 
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule) 
  },

  { 
    path: 'apropos', 
    loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposModule) 
  },

  { 
    path: 'contact', 
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) 
  },

  { 
    path: 'profile', 
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) 
  },

  { path: '', redirectTo:'home', pathMatch:'full' },

  { path: '**', component: NotFoundComponent}, // dernière chose
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
