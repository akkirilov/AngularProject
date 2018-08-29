import { Component, OnInit } from '@angular/core';

import { HotelsService } from '../../../core/services/hotels.service';

import { HotelModel } from '../../../core/models/hotel';

@Component({
  selector: 'app-home-hotels',
  templateUrl: './home-hotels.component.html',
  styleUrls: ['./home-hotels.component.css']
})
export class HomeHotelsComponent implements OnInit {
    hotels : HotelModel[];
    constructor(private hotelsService : HotelsService) { }

    ngOnInit() {
        this.hotelsService
            .getTopThree()
            .subscribe(data => {
                this.hotels = data;
            });
    }
}
