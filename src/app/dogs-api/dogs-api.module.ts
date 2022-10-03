import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsApiComponentComponent } from './dogs-api-component/dogs-api-component.component';
import { DogsApiRoutingModule } from './dogs-api-routing.module';

@NgModule({
  declarations: [DogsApiComponentComponent],
  imports: [CommonModule, DogsApiRoutingModule],
})
export class DogsApiModule {}
