import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {GlobalConstants} from '../../common/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email = '';
  @Input() password = '';
  postId;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  goToRegister(){
    this.router.navigate(['/registration']);

  }

  goToHome(){
    const reqObj = {email: this.email, password: this.password, action: 'in'} ;
    console.log('login req obj--->' + JSON.stringify(reqObj));
    this.http.post<any>(GlobalConstants.apiURL + '/auth/login', reqObj).subscribe(data => {
            this.postId = data.uid;

            localStorage.setItem('uid', this.postId);
            alert('data from local storage---' + localStorage.getItem('uid'));
            this.router.navigate(['/main']);
    });
  }

}
