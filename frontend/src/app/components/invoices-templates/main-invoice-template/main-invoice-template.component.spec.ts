import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInvoiceTemplateComponent } from './main-invoice-template.component';

describe('MainInvoiceTemplateComponent', () => {
  let component: MainInvoiceTemplateComponent;
  let fixture: ComponentFixture<MainInvoiceTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainInvoiceTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainInvoiceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
