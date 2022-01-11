import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SingleViewComponent} from "./single-view.component";
import {SingleViewRoutingModule} from "./single-view-routing.module";
import {AppModule} from "../../app.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SingleViewComponent
  ],
  exports: [
    SingleViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SingleViewRoutingModule
  ]
})
export class SingleViewModule {
}
