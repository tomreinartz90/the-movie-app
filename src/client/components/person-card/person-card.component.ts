import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "mm-person",
  templateUrl: "person-card.component.html",
})
export class PersonCardComponent {
  @Input()
  person:any;
}
