import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/global-constants';

const baseUrl = GlobalConstants.apiURL + '/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userLogin(user) {
    return this.http.post<any>(baseUrl + '/login', user);
  }


}
