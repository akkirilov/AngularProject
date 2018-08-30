import { Component, Input, OnInit } from '@angular/core';'@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { HotelsService } from '../../../core/services/hotels.service';

import { HotelModel } from '../../../core/models/hotel';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-profile-hotels',
  templateUrl: './profile-hotels.component.html',
  styleUrls: ['./profile-hotels.component.css'],
  animations: [appAnimations]
})
export class ProfileHotelsComponent implements OnInit {
    @Input()userId : string;
    hotels : HotelModel[];
    isOwner : boolean;
    constructor(private hotelsService : HotelsService,
            private route : ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userId = params['id'];
            if (this.userId == sessionStorage.getItem('id')) {
                this.isOwner = true;
            } else {
                this.isOwner = false;
            }
            this.hotelsService.getAllByUserId(this.userId)
                .subscribe(data => {
                    this.hotels = data;
                });
        });
        
    }

}
