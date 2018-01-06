import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "mm-serie",
  templateUrl: "serie-card.component.html",
})
export class SerieCardComponent {
  @Input()
  serie:any;
}
