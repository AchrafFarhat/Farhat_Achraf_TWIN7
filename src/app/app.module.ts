import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormsModule } from '@angular/forms';
import { ContainsPipe } from './contains.pipe';
import { HilightDirective } from './hilight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsQCategoryComponent } from './products-qcategory/products-qcategory.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { AddProductComponent } from './add-product/add-product.component';

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
  ],
  imports: [ //la liste des modules dont on a besoin
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
