import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "mm-movie",
  templateUrl: "movie-card.component.html",
})
export class MovieCardComponent {
  @Input()
  movie:any;
}
