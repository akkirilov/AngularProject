import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication.service';
import { HotelsService } from '../../../core/services/hotels.service';

import { HomeHotelsComponent } from '../home-hotels/home-hotels.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    constructor(private authService : AuthenticationService,
            private hotelService : HotelsService) { }
    
    ngOnInit() {
        this.authService.getBasicToken().subscribe();
    }

}
