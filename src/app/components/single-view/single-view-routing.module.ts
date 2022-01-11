import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SingleViewComponent} from "./single-view.component";


const routes: Routes = [
  {
    path: '',
    component: SingleViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleViewRoutingModule { }
