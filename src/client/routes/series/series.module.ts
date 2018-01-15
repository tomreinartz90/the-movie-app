import { NgModule } from "@angular/core";
import { MatCardModule, MatListModule, MatProgressBarModule, MatToolbarModule } from "@angular/material";
import { SeriesComponent } from "./series.component";
import { CommonModule } from "@angular/common";
import { ShowComponent } from "./detail/show.component";

@NgModule( {
  imports: [MatListModule, MatCardModule, MatToolbarModule, MatProgressBarModule, CommonModule],
  declarations: [SeriesComponent, ShowComponent]
} )

export class SeriesModule {}

