import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HomeModule } from "./home.module";

const routes: Routes = [
  { path: "", component: HomeComponent }
];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild( routes );

@NgModule( {
  imports: [HomeRouting, HomeModule]
} )
class HomeRoutingModule {}

export function HomeRoutingModuleFactory() {
  return HomeRoutingModule
}
