import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibrettosPage } from './librettos.page';

const routes: Routes = [
  {
    path: '',
    component: LibrettosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibrettosPageRoutingModule {}
