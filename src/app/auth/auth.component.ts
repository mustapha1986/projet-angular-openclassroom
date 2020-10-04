import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router) { }
  authStatus: boolean;
  ngOnInit(): void {

  }

  onSignIn() {
   this.authService.signeIn().then(
     () =>{
      console.log('its ok');
      this.authStatus = this.authService.isAuth;
      this.router.navigate(['appareils']);
   });
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
