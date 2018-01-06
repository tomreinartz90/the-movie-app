import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SeriesComponent } from "./series.component";
import { MovieComponent } from "../movies/detail/movie.component";
import { MoviesModule } from "../movies/movies.module";
import { SeriesModule } from "./series.module";

const routes: Routes = [
  { path: "series", component: SeriesComponent },
  { path: "details/:id", component: SeriesComponent }

];

export const seriesRouting: ModuleWithProviders = RouterModule.forChild( routes );


@NgModule( {
  imports: [seriesRouting, SeriesModule]
} )
class SeriesRoutingModule {}

export function SeriesRoutinggModuleFactory() {
  return SeriesRoutingModule;
}
