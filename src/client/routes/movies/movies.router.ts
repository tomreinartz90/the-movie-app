import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./list/movies.component";
import { MoviesModule } from "./movies.module";
import { MovieComponent } from "./detail/movie.component";

const routes: Routes = [
  { path: "", component: MoviesComponent },
  { path: "details/:id", component: MovieComponent }
];

export const moviesRouting: ModuleWithProviders = RouterModule.forChild( routes );


@NgModule( {
  imports: [moviesRouting, MoviesModule]
} )
class MoviesRoutingModule {}

export function MoviesRoutinggModuleFactory() {
  return MoviesRoutingModule;
}
