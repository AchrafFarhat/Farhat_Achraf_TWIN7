import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainsPipe } from './contains.pipe';
import { HilightDirective } from './hilight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsQCategoryComponent } from './products-qcategory/products-qcategory.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductReactiveComponent } from './add-product-reactive/add-product-reactive.component';
import { CardComponent } from './card/card.component';
import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListCategoriesComponent,
    ContainsPipe,
    HilightDirective,
    NotFoundComponent,
    TestComponent,
    ProductsCategoryComponent,
    ProductsQCategoryComponent,
    DetailsCategoryComponent,
    AddProductComponent,
    AddProductReactiveComponent,
    CardComponent,
    ListProductsComponent,
  ],
  imports: [ //la liste des modules dont on a besoin
    BrowserModule,
    AppRoutingModule,
    FormsModule, //template driven form
    ReactiveFormsModule, //reactive form
    HttpClientModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
