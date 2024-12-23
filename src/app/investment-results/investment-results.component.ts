import { CurrencyPipe } from "@angular/common";
import { Component, computed, inject } from "@angular/core";

import { InvestmentService } from "../investment.service";

@Component({
  selector: "app-investment-results",
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css"
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  //   get results() {
  //     return this.investmentService.resultsData;
  //   }
  // Signal Way
  results = computed(() => this.investmentService.resultsData());
  // Or
  //   results = this.investmentService.resultsData.asReadonly;
}
