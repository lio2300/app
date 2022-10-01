import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogComponentComponent } from './dog-component/dog-component.component';

const routes: Routes = [
  {
    path: '',
    component: DogComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogsRoutingModule {}
