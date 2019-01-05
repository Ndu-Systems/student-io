import { Injectable } from '@angular/core';
import { API_URL, USER_TOKEN } from 'src/app/shared/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiUrlBase = API_URL;

  constructor(private http: HttpClient) { }

  Login(user: User) {
      let userData = { Username : user.Email  , Password  : user.Password };
      let headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.post(this.apiUrlBase +'/accounts/Login', JSON.stringify(userData), {headers : headers });
  }

  Logout(){
    localStorage.removeItem(USER_TOKEN);
  }

}
