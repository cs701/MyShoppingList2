import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  signup(){
    this.router.navigate(['/login']);
  }

  goToRegister(){  
    const registerObj = {"fname" : this.fname, "lname" : this.lname, "email": this.email, "psw": this.psw, "psw_repeat": this.psw_repeat} 
    console.log("register req obj--->"+JSON.stringify(registerObj)); 
    this.router.navigate(['/main']);  
  } 

}
