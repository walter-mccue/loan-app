/**
 * Title: home.component.ts
 * Author: Walter McCue
 * Date: 02/26/23
 * Description: ts for the loan-app project
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  // Initial variables

  loanForm!: FormGroup;

  principle: number = 0;
  interest: number = 0;
  years: number = 0;

  monthlyPayment: number = 0;
  totalInterest: number = 0;

  // Error messages

  errorMessage: string = "Please only enter numbers with up to two decimal places.";
  errorYear: string = "Please only enter a whole number that represents the length of the loan in years.";

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {

    // Creates Form Control and Validators for the input fields for the loanForm FromBuilder Group

    this.loanForm = this.fb.group({
      principle: new FormControl('', [ Validators.required, Validators.pattern('\\-?\\d*\\.?\\d{1,2}') ]),
      interest: new FormControl('', [ Validators.required, Validators.pattern('\\-?\\d*\\.?\\d{1,2}') ]),
      years: new FormControl('', [ Validators.required, Validators.pattern('^[0-9]*$') ]),
    })

  }

  // Calculate Button function

  onSubmit() {
    // Stores user input in variables
    const formInput = this.loanForm.value;
    const loanAmount = parseFloat(formInput.principle);
    const rate = parseFloat(formInput.interest);
    const numOfYears = parseFloat(formInput.years);

    // Calculates the interest rate per year and converts the length of the loan from years to months
    const ratePerPeriod = (rate / 1200);
    const numOfMonths = (numOfYears * 12);

    // Calculates the total monthly payment and total interest paid through the length of the loan
    this.monthlyPayment = (loanAmount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), numOfMonths))) / (Math.pow((1 + ratePerPeriod), numOfMonths) - 1);
    this.totalInterest = ((this.monthlyPayment * numOfMonths) - loanAmount);

    // Rounds the final calculations to two decimal points
    this.monthlyPayment = parseFloat(this.monthlyPayment.toFixed(2));
    this.totalInterest = parseFloat(this.totalInterest.toFixed(2));
  }

  // Sets the values for monthly payment and total interest to 0 when the reset button is clicked

  onReset() {
    this.monthlyPayment = 0;
    this.totalInterest = 0;
  }

}
