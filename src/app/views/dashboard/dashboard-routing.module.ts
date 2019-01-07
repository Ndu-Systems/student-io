import { CardCoursesComponent } from './cards/card-courses/card-courses.component';
import { CardSmallComponent } from "./cards/card-small/card-small.component";
import { CardMedComponent } from "./cards/card-med/card-med.component";
import { UsersComponent } from "./users/users.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { DashHomeComponent } from "./dash-home/dash-home.component";
import { CoursesComponent } from "./courses/courses.component";

export const declarations = [
  DashboardComponent,
  UsersComponent,
  DashHomeComponent,
  CardMedComponent,
  CardSmallComponent,
  CoursesComponent,
  CardCoursesComponent
];
const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: DashHomeComponent },
      { path: "students", component: UsersComponent },
      { path: "courses", component: CoursesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
