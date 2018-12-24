import { AboutUsectionComponent } from './index/home-page-sections/about-usection/about-usection.component';
import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

export const declarations = [HomeComponent, LoginComponent, IndexComponent,AboutUsectionComponent];
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", component: IndexComponent },
      { path: "login", component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
