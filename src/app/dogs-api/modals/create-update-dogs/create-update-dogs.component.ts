import { Component, Input, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Dogs } from 'src/app/interfaces/dogs.interfaces';

@Component({
  selector: 'app-create-update-dogs',
  templateUrl: './create-update-dogs.component.html',
  styleUrls: ['./create-update-dogs.component.scss'],
})
export class CreateUpdateDogsComponent implements OnInit {
  public formDog: FormGroup = new FormGroup({});
  public dataDog: any;

  @Input() set DogsComponent(data: any) {
    this.dataDog = data;
    const { dog } = this.dataDog ?? {};
    this.fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'name',
            type: 'input',
            className: 'col-6',
            defaultValue: dog?.name ?? '',
            templateOptions: {
              label: 'Name',
              placeholder: 'Type Name',
              required: true,
            },
          },
          {
            key: 'latin_name',
            type: 'input',
            defaultValue: dog?.latin_name ?? '',
            className: 'col-6',
            templateOptions: {
              label: 'Latin Name',
              placeholder: 'Type Latin Name',
              required: true,
            },
          },
          {
            key: 'animal_type',
            type: 'input',
            defaultValue: dog?.animal_type ?? '',
            className: 'col-4',
            templateOptions: {
              label: 'Animal Type',
              placeholder: 'Type Animal Type',
              required: true,
            },
          },
          {
            key: 'active_time',
            type: 'input',
            defaultValue: dog?.active_time ?? '',
            className: 'col-4',
            templateOptions: {
              label: 'Active Time',
              placeholder: 'Type Active Time',
              required: true,
            },
          },
          {
            key: 'length_min',
            type: 'input',
            defaultValue: dog?.length_min ?? '',
            className: 'col-4',
            templateOptions: {
              label: 'Length Min',
              placeholder: 'Type Length Min',
              required: true,
            },
          },
          {
            key: 'weight_min',
            type: 'input',
            defaultValue: dog?.weight_min ?? '',
            className: 'col-4',
            templateOptions: {
              label: 'Weight Min',
              placeholder: 'Type Weight Min',
              required: true,
            },
          },
          {
            key: 'weight_max',
            type: 'input',
            defaultValue: dog?.weight_max ?? '',
            className: 'col-4',
            templateOptions: {
              label: 'Weight Max',
              placeholder: 'Type Weight Max',
              required: true,
            },
          },
          {
            key: 'lifespan',
            type: 'input',
            defaultValue: dog?.lifespan ?? '',
            className: 'col-4',
            templateOptions: {
              label: 'Life Span',
              placeholder: 'Type Life Span',
              required: true,
            },
          },
          {
            key: 'habitat',
            type: 'input',
            defaultValue: dog?.habitat ?? '',
            className: 'col-4',
            templateOptions: {
              label: 'Habitat',
              placeholder: 'Type Habitat',
              required: true,
            },
          },
          {
            key: 'diet',
            type: 'input',
            defaultValue: dog?.diet ?? '',
            className: 'col-4',
            templateOptions: {
              label: 'Diet',
              placeholder: 'Type Diet',
              required: true,
            },
          },
          {
            key: 'geo_range',
            type: 'input',
            defaultValue: dog?.geo_range ?? '',
            className: 'col-4',
            templateOptions: {
              label: 'Location',
              placeholder: 'Type Location',
              required: true,
            },
          },
          {
            key: 'image_link',
            type: 'input',
            defaultValue: dog?.image_link ?? '',
            className: 'col-12',
            templateOptions: {
              label: 'URL Image',
              placeholder: 'Type URL Image',
              required: true,
            },
          },
        ],
      },
    ];
  }

  fields!: FormlyFieldConfig[];
  model = {};

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.formDog.valid) {
      this.modal.close({ created: true, data: this.model });
    }
  }
}
