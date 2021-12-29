import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuWithValidationsComponent } from './demo-form-sku-with-validations.component';

describe('DemoFormSkuWithValidationsComponent', () => {
  let component: DemoFormSkuWithValidationsComponent;
  let fixture: ComponentFixture<DemoFormSkuWithValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormSkuWithValidationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuWithValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
