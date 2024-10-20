import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsQCategoryComponent } from './products-qcategory.component';

describe('ProductsQCategoryComponent', () => {
  let component: ProductsQCategoryComponent;
  let fixture: ComponentFixture<ProductsQCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsQCategoryComponent]
    });
    fixture = TestBed.createComponent(ProductsQCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
