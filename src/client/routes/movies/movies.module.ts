import { NgModule } from "@angular/core";
import { MatCardModule, MatListModule, MatProgressBarModule, MatToolbarModule } from "@angular/material";
import { MoviesComponent } from "./list/movies.component";
import { MovieComponent } from "./detail/movie.component";
import { CommonModule } from "@angular/common";

@NgModule( {
  imports: [MatListModule, MatCardModule, MatToolbarModule, MatProgressBarModule, CommonModule],
  exports: [],
  declarations: [MoviesComponent, MovieComponent]
} )


export class MoviesModule {}
