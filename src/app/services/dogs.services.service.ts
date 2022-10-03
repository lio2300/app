import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Dogs } from '../interfaces/dogs.interfaces';
import { environment } from '../../environments/environment';
import { DogsTable } from '../interfaces/dog-table.interfaces';

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

  createDog(Dogs: Dogs) {
    return this.http.post(`${API}/dogs/create`, Dogs);
  }

  getDogs({
    skip = 0,
    limit = 0,
    search = '',
    sortBy = '',
    orderBy = '',
  }): Observable<DogsTable> {
    let params = { skip, limit, search, sortBy, orderBy };
    return this.http.get(`${environment.API}/api/v1/dogs/all`, { params }).pipe(
      map((resp) => {
        return <DogsTable>resp;
      }),
      catchError((err) => {
        this.toastr.error(`Error de servicio`);
        return throwError(err);
      })
    );
  }

  deleteDogs({ _id }: { _id: string }): Observable<Dogs> {
    let params = { _id };
    return this.http.delete(`${environment.API}/api/v1/dogs`, { params }).pipe(
      map((resp) => {
        return <Dogs>resp;
      }),
      catchError((err) => {
        this.toastr.error(`Error de servicio`);
        return throwError(err);
      })
    );
  }

  updateDog(Dogs: Dogs) {
    return this.http.post(`${API}/dogs/update`, Dogs).pipe(
      map((resp) => {
        return <Dogs>resp;
      }),
      catchError((err) => {
        this.toastr.error(`Error de servicio`);
        return throwError(err);
      })
    );
  }
}
