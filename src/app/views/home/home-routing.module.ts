import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

export const declarations = [HomeComponent, LoginComponent];
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [{ path: "login", component: LoginComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
