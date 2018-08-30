import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Form, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

import { ToastrService } from 'ngx-toastr';
import { HotelsService } from '../../../core/services/hotels.service';

import { HotelModel } from '../../../core/models/hotel';

import { appAnimations } from '../../../app.animations';

@Component({
  selector: 'app-hotel-delete',
  templateUrl: './hotel-delete.component.html',
  styleUrls: ['./hotel-delete.component.css'],
  animations: [appAnimations]
})
export class HotelDeleteComponent implements OnInit {
    hotel : HotelModel;
    hotelForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        description: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
        imageUrl: new FormControl(''),
        hotelUrl: new FormControl('')
    });
      
    constructor(private hotelsService : HotelsService,
            private toastr : ToastrService,
            private route : ActivatedRoute,
            private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.hotelsService.getById(id)
                .subscribe(data => {
                    this.hotel = data;
                    this.hotelForm.controls.city.setValue(this.hotel.city);
                    this.hotelForm.controls.description.setValue(this.hotel.description);
                    this.hotelForm.controls.name.setValue(this.hotel.name);
                    this.hotelForm.controls.imageUrl.setValue(this.hotel.imageUrl);
                    this.hotelForm.controls.hotelUrl.setValue(this.hotel.hotelUrl);
                })
        });
    }
    
    onSubmit() {
        this.hotelsService.delete(this.hotel._id).subscribe(data => {
            this.router.navigate(['/hotels']);
            this.toastr.success('Successfully delete ' +  this.hotel.name + '!');
        });
    }

}
