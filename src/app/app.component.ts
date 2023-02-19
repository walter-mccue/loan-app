/**
 * Title: app.component.ts
 * Author: Walter McCue
 * Date: 02/26/23
 * Description: ts for the loan-app project
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string;

  constructor() {

    this.title = "Welcome to the Loan App!";

  }

}
