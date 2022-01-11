import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchEngineComponent} from "./search-engine.component";
import {SearchEngineRoutingModule} from "./search-engine-routing.module";
import {SingleViewModule} from "../single-view/single-view.module";



@NgModule({
  declarations: [
    SearchEngineComponent
  ],
  imports: [
    CommonModule,
    SearchEngineRoutingModule,
    SingleViewModule
  ]
})
export class SearchEngineModule {
  static components = {
    lazy: SingleViewModule,
  };
}
