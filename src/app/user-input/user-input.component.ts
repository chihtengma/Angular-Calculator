import { FormsModule } from "@angular/forms";
import { Component, signal } from "@angular/core";

import { InvestmentService } from "../investment.service";

@Component({
  selector: "app-user-input",
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css"
})
export class UserInputComponent {
  duration = signal("10");
  expectedReturn = signal("5");
  annualInvestment = signal("0");
  initialInvestment = signal("0");

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    });

    // Reset the form after form submitted
    this.duration.set("10");
    this.expectedReturn.set("5");
    this.annualInvestment.set("0");
    this.initialInvestment.set("0");
  }
}
