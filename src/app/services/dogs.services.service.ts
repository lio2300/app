import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Dogs } from '../interfaces/dogs.interfaces';
import { environment } from '../../environments/environment';

const API_GITHUB_URL = (option: string) =>
  `https://zoo-animal-api.herokuapp.com/${option}`;
const { API: apiMain } = environment;
const API = `${apiMain}/api/v1`;

@Injectable({
  providedIn: 'root',
})
export class DogsServices {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getDogsGitHub(): Observable<Dogs[]> {
    return this.http.get(API_GITHUB_URL('animals/rand/10')).pipe(
      map((resp) => {
        return <Dogs[]>resp;
      }),
      catchError((err) => {
        this.toastr.error(`Error de servicio`);
        return throwError(err);
      })
    );
  }

  createDogs(Dogs: Dogs[]) {
    return this.http.post(`${API}/dogs/multiple`, Dogs).pipe(
      map((resp) => {
        return <Dogs[]>resp;
      }),
      catchError((err) => {
        this.toastr.error(`Error de servicio`);
        return throwError(err);
      })
    );
  }
}
