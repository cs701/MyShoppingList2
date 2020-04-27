import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
   // const registerObj = {"fname" : this.fname, "lname" : this.lname, "email": this.email, "psw": this.psw, "psw_repeat": this.psw_repeat,"action":"up"} 
    //console.log("register req obj--->"+JSON.stringify(registerObj)); 
    //this.router.navigate(['/main']);  

    const reqObj = {"email":this.email, "password":this.psw, "action":"up"} ;
    
    this.http.post<any>('http://localhost:1337/login', reqObj).subscribe(data => {
            this.postId = data.uid;
            //alert(this.postId);
            localStorage.setItem('uid', this.postId);
            alert("data from local storage---"+localStorage.getItem('uid'));
            this.router.navigate(['/main']); 
    })
  } 

}
