import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/internal/operators';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  create<T>(data: T, endpoint: string): Observable<T> {
    return this.http.post(`${environment.apiUrl}/${endpoint}`, data).pipe(
      map((d: T) => d),
      catchError((error: Response) =>
        observableThrowError(error || 'Server error')
      )
    );
  }

  edit<T>(data: T, endpoint: string): Observable<T> {
    return this.http
      .put(`${environment.apiUrl}/${endpoint}/${data['id']}`, data)
      .pipe(
        map((d: T) => d),
        catchError((error: Response) =>
          observableThrowError(error || 'Server error')
        )
      );
  }

  patch<T>(data: T, endpoint: string): Observable<T> {
    return this.http
      .patch(`${environment.apiUrl}/${endpoint}/${data['id']}`, data)
      .pipe(
        map((d: T) => d),
        catchError((error: Response) =>
          observableThrowError(error || 'Server error')
        )
      );
  }

  get<T>(id: string | number, endpoint: string): Observable<T> {
    return this.http.get(`${environment.apiUrl}/${endpoint}/${id}`).pipe(
      map((d: T) => d),
      catchError((error: Response) =>
        observableThrowError(error || 'Server error')
      )
    );
  }

  remove(id: string | number, endpoint: string): Observable<boolean> {
    return this.http.delete(`${environment.apiUrl}/${endpoint}/${id}`).pipe(
      map(() => true),
      catchError((error: Response) =>
        observableThrowError(error || 'Server error')
      )
    );
  }

  list<T>(endpoint: string, queryParams: Params = {}): Observable<T[]> {
    return this.http
      .get(`${environment.apiUrl}/${endpoint}`, {
        params: {
          ...queryParams
        }
      })
      .pipe(
        map((data: T[]) => data),
        catchError((error: Response) =>
          observableThrowError(error || 'Server error')
        )
      );
  }
}
