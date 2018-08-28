import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(public authService : AuthenticationService, 
          private router: Router) { }

  ngOnInit() {  }
  
  logout() {
      if (!this.authService.isLogged()) {
          this.router.navigate(['/auth/login']);
      } else {
          this.authService
              .logout()
              .subscribe(data => {
                  sessionStorage.clear();
                  this.router.navigate(['/auth/login']);
              },
              error => {
              });
      }
  }

}
