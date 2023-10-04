import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api';
private user! : Observable<User>;
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
   
    return this.http.get<User[]>('http://localhost:8080/api/users');
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/id/${id}`);
    
  }
  getUserByUsername(username: string): Observable<User> {
    this.user=this.http.get<User>(`${this.apiUrl}/username/${username}`);
    return this.http.get<User>(`${this.apiUrl}/username/${username}`);  
  }
  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/email/${email}`);  
  }
  getUser(): Observable<User> {
    return this.user;
    
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/api/register', user);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
