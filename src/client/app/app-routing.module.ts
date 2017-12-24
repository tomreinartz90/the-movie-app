import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { aboutRoutes } from "./about/about.router";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", redirectTo: "about", pathMatch: "full"},
      ...aboutRoutes,
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
