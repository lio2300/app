import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { DogsRoutingModule } from './dogs-routing.module';
import { DogComponentComponent } from './dog-component/dog-component.component';

@NgModule({
  declarations: [DogComponentComponent],
  imports: [CommonModule, DogsRoutingModule, NgbModule, FormsModule],
})
export class DogsModule {}
