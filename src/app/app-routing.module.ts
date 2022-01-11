import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./components/search-engine/search-engine.module').then(m => m.SearchEngineModule)
  },
  { path: 'details/:id',
    loadChildren: () => import('./components/single-view/single-view.module').then(m => m.SingleViewModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

