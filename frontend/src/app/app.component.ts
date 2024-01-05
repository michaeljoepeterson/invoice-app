import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  MatDialog,
} from '@angular/material/dialog';
import { MainInvoiceTemplateComponent } from './components/invoices-templates/main-invoice-template/main-invoice-template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainInvoiceTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  constructor(
    public dialog: MatDialog
  ) {}

  openTemplate(){
    this.dialog.open(MainInvoiceTemplateComponent, {
      width: '100%',
      height: '100%'
    });
  }
}
