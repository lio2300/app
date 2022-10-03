import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Dogs } from 'src/app/interfaces/dogs.interfaces';
import { DogsServices } from 'src/app/services/dogs.services.service';
import { CreateUpdateDogsComponent } from '../modals/create-update-dogs/create-update-dogs.component';
import { DeleteDogsComponent } from '../modals/delete-dogs/delete-dogs.component';

@Component({
  selector: 'app-dogs-api-component',
  templateUrl: './dogs-api-component.component.html',
  styleUrls: ['./dogs-api-component.component.scss'],
})
export class DogsApiComponentComponent implements OnInit {
  public loading: boolean = false;
  public loadingDogs: boolean = false;
  public Dogs!: Dogs[];
  public page: number = 1;
  public total: number = 0;
  public skip: number = 0;
  public limit: number = 10;

  constructor(
    private $DogsService: DogsServices,
    private _modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs() {
    this.loading = true;
    this.$DogsService
      .getDogs({ skip: this.skip, limit: this.limit })
      .subscribe((dogsTable) => {
        this.Dogs = dogsTable.data;
        this.total = dogsTable.total;
        this.loading = false;
      });
  }

  onChangePage(page: number) {
    console.log(page);
    this.skip = page === 1 ? 0 : (page - 1) * this.limit;
    this.getDogs();
  }

  createDog() {
    const componentDog = this._modalService.open(CreateUpdateDogsComponent, {
      size: 'lg',
    });
    componentDog.componentInstance.dataDog = { title: 'Create Dog' };
    componentDog.result.then(
      (res) => {
        const { data, created } = res;
        if (created) {
          this.loading = true;
          this.$DogsService.createDog(data).subscribe(
            (res) => {
              this.loading = false;
              this.toastr.success(`The record has been created successfully`);
              this.getDogs();
            },
            (error) => {
              this.getDogs();
            }
          );
        }
      },
      (reason) => {}
    );
  }

  deleteDog(_id: string) {
    this._modalService.open(DeleteDogsComponent).result.then(
      (res) => {
        if (res) {
          this.loading = true;
          this.$DogsService.deleteDogs({ _id }).subscribe(
            (res) => {
              this.loading = false;
              this.toastr.success(`The record has been deleted successfully`);
              this.getDogs();
            },
            (err) => {
              this.getDogs();
            }
          );
        }
      },
      (reason) => {}
    );
  }

  updateDog(dog: Dogs) {
    console.log(dog);
    const componentDog = this._modalService.open(CreateUpdateDogsComponent, {
      size: 'lg',
    });
    componentDog.componentInstance.DogsComponent = { title: 'Update Dog', dog };
    componentDog.result.then(
      (res) => {
        const { data, created } = res;
        if (created) {
          this.loading = true;
          let datos = { ...dog, ...data };
          this.$DogsService.updateDog(datos).subscribe(
            (res) => {
              this.loading = false;
              this.toastr.success(`The record has been updated successfully`);
              this.getDogs();
            },
            (err) => {
              this.getDogs();
            }
          );
        }
      },
      (reason) => {}
    );
  }
}
