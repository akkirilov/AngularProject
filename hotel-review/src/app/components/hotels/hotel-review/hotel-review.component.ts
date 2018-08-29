import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Form, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { HotelsService } from '../../../core/services/hotels.service';

import { CommentsComponent } from '../../comments/comments/comments.component';

import { HotelModel } from '../../../core/models/hotel';

@Component({
  selector: 'app-hotel-review',
  templateUrl: './hotel-review.component.html',
  styleUrls: ['./hotel-review.component.css']
})
export class HotelReviewComponent implements OnInit {
    canVote : boolean;
    canEdit : boolean;
    hotel : HotelModel;
    voteForm = new FormGroup({
        raiting: new FormControl('', [Validators.required])
    });
    constructor(private route : ActivatedRoute,
            private toastr : ToastrService,
            private hotelsService : HotelsService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.hotelsService
                .getById(id)
                .subscribe(data => {
                    let userId = sessionStorage.getItem('id');
                    this.hotel = data;
                    this.canVote = !this.hotel.voteUsers.includes(userId);
                    this.canEdit = data['_acl']['creator'] == userId 
                        || (sessionStorage.getItem('role') == 'admin' && '5b85304d40c95455d51807b9' == userId);
                });
        });
    }
    
    vote(){
        if (this.canVote) {
        let userId = sessionStorage.getItem('id');
            let currentRaiting = Number(this.hotel.raiting);
            this.hotel.voteUsers.push(userId);
            this.hotel.raiting = (currentRaiting + Number(this.voteForm.value.raiting)) / 2;
            this.canVote = !this.canVote;
            this.hotelsService.edit(this.hotel).subscribe(data => {
                this.toastr.success('Successfully vote for ' + this.hotel.name + '!');
            });
        }
    }

}
