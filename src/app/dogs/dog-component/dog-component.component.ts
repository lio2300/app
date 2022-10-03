import { Component, OnInit } from '@angular/core';
import { Dogs } from 'src/app/interfaces/dogs.interfaces';
import { DogsServices } from 'src/app/services/dogs.services.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dog-component',
  templateUrl: './dog-component.component.html',
  styleUrls: ['./dog-component.component.scss'],
})
export class DogComponentComponent implements OnInit {
  public page: number = 1;
  public Dogs: Dogs[] | null = [];
  public loading: boolean = true;
  public loadingDogs: boolean = false;

  constructor(
    private $DogsService: DogsServices,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadDogs();
  }

  loadDogs() {
    this.$DogsService.getDogsGitHub().subscribe((dogs: Dogs[]) => {
      this.Dogs = dogs;
      this.loading = false;
      console.log(dogs);
    });
  }

  addDogs(id: number) {
    const indexDog = this.Dogs?.findIndex((d) => d.id === id) ?? -1;
    this.Dogs && (this.Dogs[indexDog].add = !this.Dogs[indexDog].add);
  }
  allDogs() {
    this.Dogs = this.Dogs && this.Dogs?.map((d) => ({ ...d, add: !d.add }));
  }

  btnRefresh() {
    this.loading = true;
    this.loadDogs();
  }

  createMarkedData() {
    const dataDogs: Dogs[] =
      this.Dogs?.filter((d) => d.add).map((d) => {
        delete d.add;
        return d;
      }) ?? [];

    dataDogs.length > 0 &&
      this.$DogsService.createDogs(dataDogs).subscribe((dogs) => {
        this.loadingDogs = false;
        this.toastr.success('Successfully created dog');
      });
    dataDogs.length === 0 && this.toastr.info('Select a dog');
  }
}
