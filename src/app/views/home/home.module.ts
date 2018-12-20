import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule ,declarations} from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,HomeRoutingModule,SharedModule
  ],
  exports:[],
  declarations: [...declarations],
})
export class HomeModule { }
