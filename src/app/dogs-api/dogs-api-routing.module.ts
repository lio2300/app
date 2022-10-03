import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsApiComponentComponent } from './dogs-api-component/dogs-api-component.component';

const routes: Routes = [
  {
    path: '',
    component: DogsApiComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogsApiRoutingModule {}
