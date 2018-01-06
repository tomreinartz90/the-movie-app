import { NgModule } from "@angular/core";
import { MatCardModule, MatListModule } from "@angular/material";
import { seriesRouting } from "./series.router";
import { SeriesComponent } from "./series.component";

@NgModule( {
  imports: [MatListModule, MatCardModule],
  declarations: [SeriesComponent]
} )

export class SeriesModule {}
