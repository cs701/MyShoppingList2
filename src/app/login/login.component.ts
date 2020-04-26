import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email = "";
  @Input() password = "";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToRegister(){    
    this.router.navigate(['/registration']);  
  } 

  goToHome(){   
    const reqObj = {"email":this.email, "password":this.password, "action":"in"} ;
    console.log("login req obj--->"+JSON.stringify(reqObj));
    this.router.navigate(['/main']);  
  } 

}
