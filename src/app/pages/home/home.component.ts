import { Component } from "@angular/core";
import { BusinessFormularyComponent } from "../../components/business-formulary/business-formulary.component";

@Component({
	selector: "app-home",
	imports: [BusinessFormularyComponent],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {}
