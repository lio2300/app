import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsApiRoutingModule } from './dogs-api-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { DogsApiComponentComponent } from './dogs-api-component/dogs-api-component.component';
import { DeleteDogsComponent } from './modals/delete-dogs/delete-dogs.component';
import { CreateUpdateDogsComponent } from './modals/create-update-dogs/create-update-dogs.component';

@NgModule({
  declarations: [
    DogsApiComponentComponent,
    DeleteDogsComponent,
    CreateUpdateDogsComponent,
  ],
  imports: [
    CommonModule,
    DogsApiRoutingModule,
    NgbModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyBootstrapModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DogsApiModule {}
