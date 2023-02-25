/**
 * Title: results.component.ts
 * Author: Walter McCue
 * Date: 02/26/23
 * Description: ts for the loan-app project
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() monthlyPayment!: number;
  @Input() totalInterest!: number;

  ngOnInit(): void {

  }

}
