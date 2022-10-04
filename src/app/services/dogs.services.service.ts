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

  /**
   * *Get data from the API GitHub with range specified 1-10
   *
   * @return {Observable<Dogs[]>}
   */
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

  /**
   * *Create a many Dogs in the database using the specified model and return the records save
   *
   * @param Dogs Dogs[]
   * @return {Observable<Dogs[]>}
   */
  createDogs(Dogs: Dogs[]): Observable<Dogs[]> {
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

  /**
   * *Create a new Dogs in the database using the specified model and return the record save
   *
   * @param Dogs Dogs
   * @return {Dogs}
   */
  createDog(Dogs: Dogs): Observable<Dogs> {
    return this.http.post(`${API}/dogs/create`, Dogs).pipe(
      map((resp) => {
        return <Dogs>resp;
      }),
      catchError((err) => {
        this.toastr.error(`Error de servicio`);
        return throwError(err);
      })
    );
  }

  /**
   *  *Returns the records associated with the range and filters specified
   *
   * @param skip number
   * @param limit number
   * @param search string
   * @param sortBy string
   * @param orderBy string
   * @returns {Observable<DogsTable>}
   */
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

  /**
   * *Get data from the database of statistics for show in the charts
   *
   * @return {Observable<any>}
   */
  getDogsStatistics(): Observable<any> {
    return this.http.get(`${environment.API}/api/v1/dogs/statistics`).pipe(
      map((resp) => {
        return resp;
      }),
      catchError((err) => {
        this.toastr.error(`Error de servicio`);
        return throwError(err);
      })
    );
  }

  /**
   * *Send id for find and delete records from database
   *
   * @param id string
   * @returns {Observable<Dogs>}
   */
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

  /**
   * *Send id for find and update records from database
   *
   * @param Dogs Dogs
   * @returns {Observable<Dogs>}
   */
  updateDog(Dogs: Dogs): Observable<Dogs> {
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
