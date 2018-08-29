import { Component, Input, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { CommentsService } from '../../../core/services/comments.service';

import { CommentModel } from '../../../core/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment : CommentModel;
  canLike : boolean;
  userId: string;
  
  constructor( private toastr : ToastrService,
          private commentsService : CommentsService) { }

  ngOnInit() {
      this.userId = sessionStorage.getItem('id');
      if(this.comment.userId != this.userId && !this.comment.likeUsers.includes(this.userId)){
          this.canLike = true;
      } else {
          this.canLike = false;
      }
  }
  
  like() {
      this.comment.likeUsers.push(sessionStorage.getItem('id'));
      this.commentsService.edit(this.comment).subscribe(data => {
          this.canLike = !this.canLike;
          this.toastr.success('Successfully like comment!');
      });
  }

}
