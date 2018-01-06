import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatToolbarModule } from "@angular/material";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { RouterModule } from "@angular/router";
import { SerieCardComponent } from "./serie-card/serie-card.component";
import { PersonCardComponent } from "./person-card/person-card.component";

const declarations:Array<any> = [
  MovieCardComponent,
  SerieCardComponent,
  PersonCardComponent
];

@NgModule( {
  imports: [MatCardModule, MatToolbarModule, RouterModule, CommonModule],
  declarations: [declarations],
  exports: [declarations]
} )

export class ComponentsModule {}
