import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCausesComponent } from './root-causes.component';

describe('RootCausesComponent', () => {
  let component: RootCausesComponent;
  let fixture: ComponentFixture<RootCausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootCausesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
