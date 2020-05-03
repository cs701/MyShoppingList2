import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';

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
  constructor(private router: Router, private userSerive: UserService) { }

  ngOnInit(): void {
  }

  signup(){
    this.router.navigate(['/login']);
  }

  goToRegister(){

    const reqObj = {email: this.email, password: this.psw, action: 'up'} ;
    this.userSerive.userLogin(reqObj).subscribe(data => {
      localStorage.setItem('uid', data.uid);
      this.router.navigate(['/main']);
    });
  }
}
