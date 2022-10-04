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
  /**
   * !Declare all variables for the component
   */
  public loading: boolean = false;
  public loadingDogs: boolean = false;
  public Dogs!: Dogs[];
  public page: number = 1;
  public total: number = 0;
  public skip: number = 0;
  public limit: number = 10;
  public search: string = '';
  public sortBy: string = '';
  public orderBy: string = '';

  constructor(
    private $DogsService: DogsServices,
    private _modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  /**
   * *Load API data on page load
   *
   * @return {void}
   */
  ngOnInit(): void {
    this.getDogs();
  }

  /**
   * *Clear all filters
   *
   * @return {void}
   */
  clearFilters() {
    this.search = '';
    this.sortBy = '';
    this.orderBy = '';
  }

  /**
   * *Load data from the server depending the current filters settings
   *
   * @return {void}
   */
  getDogs() {
    this.loading = true;
    this.$DogsService
      .getDogs({
        skip: this.skip,
        limit: this.limit,
        search: this.search,
        sortBy: this.sortBy,
        orderBy: this.orderBy,
      })
      .subscribe(
        (dogsTable) => {
          this.Dogs = dogsTable.data;
          this.total = dogsTable.total;
          this.loading = false;
        },
        (err) => {
          this.loading = false;
        }
      );
  }

  /**
   * *Load the Dogs from the database when changing the pagination
   *
   * @param page number
   *
   * @return {void}
   */
  onChangePage(page: number) {
    this.skip = page === 1 ? 0 : (page - 1) * this.limit;
    this.getDogs();
  }

  /**
   * *Create a new record of the Dogs in the database from modal
   *
   * @return {void}
   */
  createDog() {
    const componentDog = this._modalService.open(CreateUpdateDogsComponent, {
      size: 'lg',
    });
    componentDog.componentInstance.DogsComponent = { title: 'Create Dog' };
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

  /**+
   * *Receive the record of other component for delete the record from the database
   *
   * @return {void}
   */
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

  /**
   * *Update the record in the database using the specified parameters
   *
   * @param dog Dogs
   *
   * @return {void}
   */
  updateDog(dog: Dogs) {
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
