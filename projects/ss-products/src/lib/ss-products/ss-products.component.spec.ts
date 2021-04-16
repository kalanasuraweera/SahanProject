import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsProductsComponent } from './ss-products.component';

describe('SsProductsComponent', () => {
  let component: SsProductsComponent;
  let fixture: ComponentFixture<SsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
