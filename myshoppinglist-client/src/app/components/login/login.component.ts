import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email = '';
  @Input() password = '';
  constructor(private router: Router, private userSerive: UserService) { }

  ngOnInit(): void {
  }

  goToRegister(){
    this.router.navigate(['/registration']);

  }

  goToHome(){
    const reqObj = {email: this.email, password: this.password, action: 'in'} ;
    this.userSerive.userLogin(reqObj).subscribe(data => {
      localStorage.setItem('uid', data.uid);
      this.router.navigate(['/main']);
    });
  }

}
