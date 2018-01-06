import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeRoutingModuleFactory } from "./home/home.router";
import { MoviesRoutinggModuleFactory } from "./movies/movies.router";

@NgModule( {
  imports: [
    RouterModule.forRoot( [
      { path: "", redirectTo: "home", pathMatch:"full" },
      { path: "home", loadChildren: HomeRoutingModuleFactory },
      { path: "movies", loadChildren: MoviesRoutinggModuleFactory },
      { path: "series", loadChildren: MoviesRoutinggModuleFactory },
      { path: "people", loadChildren: MoviesRoutinggModuleFactory },
    ] )
  ],
  exports: [RouterModule]
} )
export class AppRoutingModule {}
