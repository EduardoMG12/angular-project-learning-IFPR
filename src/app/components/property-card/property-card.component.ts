import { Component, Input } from "@angular/core";

@Component({
	selector: "app-property-card",
	imports: [],
	templateUrl: "./property-card.component.html",
	styleUrl: "./property-card.component.css",
})
export class PropertyCardComponent {
	@Input() title = "Property Type";
	@Input() count = 0;
	@Input() imageUrl = "https://via.placeholder.com/150";

	@Input() backgroundColor = "bg-blue-900";
	@Input() textColor = "text-white";
	@Input() borderRadius = "rounded-lg";
	@Input() fontSize = "text-lg";
}
