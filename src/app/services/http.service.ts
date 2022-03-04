import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = environment.API;

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${url}`).pipe(
      tap(res => console.log('res' , res)),
      catchError(e => of({message: 'error'}))
    );
  }

  post(url: string, body: object): Observable<any> {
    return this.http.post(`${this.baseUrl}/${url}`, body)
    .pipe(
      tap(res => console.log('res' , res)),
      catchError(e => of({message: 'error'}))
    );
  }
}
