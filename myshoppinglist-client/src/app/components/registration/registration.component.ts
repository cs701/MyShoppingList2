import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() fname = "";
  @Input() lname = "";
  @Input() email = "";
  @Input() psw = "";
  @Input() psw_repeat = "";
  postId;
  constructor(private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  signup(){
    this.router.navigate(['/login']);
  }

  goToRegister(){  

    const reqObj = {"email":this.email, "password":this.psw, "action":"up"} ;
    
    this.http.post<any>(GlobalConstants.apiURL + '/auth/login', reqObj).subscribe(data => {
            this.postId = data.uid;
            //alert(this.postId);
            localStorage.setItem('uid', this.postId);
            //alert("data from local storage---"+localStorage.getItem('uid'));
            this.router.navigate(['/main']); 
    })
  } 

}
