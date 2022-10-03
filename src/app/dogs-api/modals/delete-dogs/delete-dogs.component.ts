import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-dogs',
  templateUrl: './delete-dogs.component.html',
  styleUrls: ['./delete-dogs.component.scss'],
})
export class DeleteDogsComponent implements OnInit {
  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}
