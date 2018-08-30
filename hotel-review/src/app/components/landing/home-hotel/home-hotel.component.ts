import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication.service';

import { HotelModel } from '../../../core/models/hotel';

@Component({
  selector: 'app-home-hotel',
  templateUrl: './home-hotel.component.html',
  styleUrls: ['./home-hotel.component.css']
})
export class HomeHotelComponent implements OnInit {
  @Input() hotel : HotelModel;
  constructor(public authService : AuthenticationService) { }

  ngOnInit() {
  }

}
