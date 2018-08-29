import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CommentsService } from '../../core/services/comments.service';

import { CommentComponent } from './comment/comment.component';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    CommentComponent, 
    CommentEditComponent, 
    CommentsComponent
  ],
  exports: [
    CommentsComponent
  ],
  providers: [
    CommentsService
  ]
})
export class CommentsModule { }
