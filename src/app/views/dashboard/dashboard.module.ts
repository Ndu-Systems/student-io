import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule,declarations } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,DashboardRoutingModule,SharedModule
  ],
  declarations: [...declarations]
})
export class DashboardModule { }
