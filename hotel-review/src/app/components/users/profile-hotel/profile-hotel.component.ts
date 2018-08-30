import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication.service';

import { HotelModel } from '../../../core/models/hotel';

@Component({
  selector: 'app-profile-hotel',
  templateUrl: './profile-hotel.component.html',
  styleUrls: ['./profile-hotel.component.css']
})
export class ProfileHotelComponent implements OnInit {
    @Input() hotel : HotelModel;
    canEdit : boolean;
    constructor(private authenticationService : AuthenticationService) { }
        
    ngOnInit() {
        this.canEdit = this.hotel['_acl']['creator'] == sessionStorage.getItem('id') 
        || this.authenticationService.isAdmin();
    }

}
