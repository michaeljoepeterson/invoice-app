import { Component } from '@angular/core';
// @ts-ignore
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-main-invoice-template',
  standalone: true,
  imports: [],
  templateUrl: './main-invoice-template.component.html',
  styleUrl: './main-invoice-template.component.css'
})
export class MainInvoiceTemplateComponent {

  savePdf(){
    var element = document.getElementById('pdf');
    console.log(element)
    html2pdf(element);
  }
}
