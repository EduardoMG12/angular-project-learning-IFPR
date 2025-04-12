import { Component } from "@angular/core";
import { BusinessFormularyComponent } from "../../components/home/business-formulary/business-formulary.component";
import { FirstSectionComponent } from "../../components/home/first-section/first-section.component";
import { SecondSectionComponent } from "../../components/home/second-section/second-section.component";

@Component({
	selector: "app-home",
	imports: [FirstSectionComponent, SecondSectionComponent],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {}
