import { Component } from '@angular/core';
// @ts-ignore
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-pdf-test',
  standalone: true,
  imports: [],
  templateUrl: './pdf-test.component.html',
  styleUrl: './pdf-test.component.css'
})
export class PdfTestComponent {

  savePdf(){
    var element = document.getElementById('pdf');
    console.log(element)
    html2pdf(element);
  }
}
