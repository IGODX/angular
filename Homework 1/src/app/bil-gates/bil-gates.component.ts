import { Component } from '@angular/core';

@Component({
  selector: 'app-bil-gates',
  templateUrl: './bil-gates.component.html',
  styleUrls: ['./bil-gates.component.css']
})
export class BilGatesComponent {
  quote: string = "Patience is a key element of success";
  linksList: string[] = [
    "https://en.wikipedia.org/wiki/Bill_Gates",
    "https://www.gatesfoundation.org/",
    "https://www.gatesnotes.com/",
    "https://twitter.com/billgates",
  ]
}
