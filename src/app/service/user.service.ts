import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://fakestoreapi.com/users';
  private getAllUsers = "https://fakestoreapi.com/users"
  private deleteUser = "https://fakestoreapi.com/users/1"
  private editUser = "https://fakestoreapi.com/users/7"


  constructor(private http: HttpClient){}

  createUser(params: User): Observable<any> {
    return this.http.post(this.apiUrl, params).pipe(
      catchError((error) => {
        console.error('Error creating user:', error);
        return throwError(error);
      })
    );
  }

  showAllUsers(): Observable<any> {
    return this.http.get(this.getAllUsers).pipe(
      catchError((error) => {
        console.error('Error fetching all users:', error);
        return throwError(error);
      })
    );
  }

  deletUser() : Observable<any> {
    return this.http.delete(this.deleteUser).pipe(
      catchError((error) => {
        console.error('Error deleting user:', error);
        return throwError(error);
      })
    )
  }

  FnEditUser(params : User): Observable<any> {
    return this.http.put(this.editUser, params).pipe(
      catchError((error) => {
        console.error('Error deleting user:', error);
        return throwError(error);
      })
    )
  }
}
