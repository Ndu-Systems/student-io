import { UsersComponent } from './users/users.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { DashHomeComponent } from './dash-home/dash-home.component';

export const declarations = [DashboardComponent,UsersComponent,DashHomeComponent];
const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: DashHomeComponent },
      { path: "users", component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
