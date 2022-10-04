import { Component, OnInit } from '@angular/core';
import { Dogs } from 'src/app/interfaces/dogs.interfaces';
import { DogsServices } from 'src/app/services/dogs.services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dog-component',
  templateUrl: './dog-component.component.html',
  styleUrls: ['./dog-component.component.scss'],
})
export class DogComponentComponent implements OnInit {
  /**
   * !Declare all variables for the component
   */
  public page: number = 1;
  public Dogs!: Dogs[];
  public loading: boolean = true;
  public loadingDogs: boolean = false;
  public checkedAll: boolean = false;

  constructor(
    private $DogsService: DogsServices,
    private toastr: ToastrService
  ) {}

  /**
   * *Load API data on page load
   *
   * @return {{void}}
   */
  ngOnInit(): void {
    this.loadDogs();
  }

  /**
   *
   * *Load data from the API of GitHub
   *
   * @return {void}
   */
  loadDogs() {
    this.loading = true;
    this.$DogsService.getDogsGitHub().subscribe(
      (dogs: Dogs[]) => {
        this.Dogs = dogs;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  /**
   * *Add a record to a variable for later save in the server
   *
   * @param id string
   *
   * @return {void}
   */
  addDogs(id: string) {
    const indexDog = this.Dogs?.findIndex((d) => d.id === id) ?? -1;
    this.Dogs && (this.Dogs[indexDog].add = !this.Dogs[indexDog].add);
  }

  /**
   * *Add all records to a variable for later save in the server
   *
   * @return {void}
   */
  allDogs() {
    this.Dogs = this.Dogs && this.Dogs?.map((d) => ({ ...d, add: !d.add }));
  }

  /**
   * *Load data from the API of GitHub
   *
   * @return {void}
   */
  btnRefresh() {
    this.loading = true;
    this.loadDogs();
  }

  /**
   * *Filter the Dogs they have selected and then save the records on the server of the variable Dogs
   *
   * @return {void}
   */
  createMarkedData() {
    const dataDogs: Dogs[] =
      this.Dogs?.filter((d) => d.add).map((d) => {
        delete d.add;
        return d;
      }) ?? [];

    dataDogs.length > 0 &&
      this.$DogsService.createDogs(dataDogs).subscribe(
        (dogs) => {
          this.loadingDogs = this.checkedAll = false;
          this.toastr.success('Successfully created dog');
          this.loadDogs();
        },
        (err) => {
          this.loadDogs();
        }
      );
    dataDogs.length === 0 && this.toastr.info('Select a dog');
  }
}
