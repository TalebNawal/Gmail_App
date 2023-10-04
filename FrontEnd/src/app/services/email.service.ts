import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient:HttpClient) { }

  getEmailList(): Observable<any[]> {
    return this.httpClient
      .get<any[]>('http://localhost:8080/mail/emails')
      .pipe(map((d: any[]) => d));
  }
  

  getEmailById(id: string): Observable<Email> {
    return this.httpClient
      .get(`http://localhost:8080/mail/email/${id}`)
      .pipe(map((d: Object) => d as Email));
  }
  postEmail(email: Email): Observable<Email> {
    return this.httpClient
      .post('http://localhost:8080/mail/send', email)
      .pipe(map((d: Object) => d as Email));
  }
}
