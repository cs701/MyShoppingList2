import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myshoppinglist-client';
  currentUser;
  constructor(private router: Router) {
    this.currentUser = localStorage.getItem('displayName');
  }
  userLogout() {
    this.currentUser = null;
    localStorage.removeItem('uid');
    localStorage.removeItem('displayName');
    this.router.navigate(['/']);
    location.reload();
  }
}
