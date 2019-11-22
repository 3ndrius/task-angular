import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../service/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  singlePost: any;
  comments: any = [];
  body: string;
  email: string;
  name: string;

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.singlePost = params['id'];
      this.httpService.getSinglePost(this.singlePost).subscribe(post => {
        console.log(post);
        this.singlePost = post.result;
      });
    });
  }

  loadComments() {
    this.httpService.loadComments(this.singlePost).subscribe(comments => {
      this.comments = this.comments.concat(comments.result);
      console.log(comments.result);
    });
  }

  addComment() {
    let comment = {body: this.body, name: this.name, post_id: this.singlePost.id, email: this.email};
    this.httpService.addComment(comment).subscribe(comment => {
      console.log(comment);
      this.comments = [...this.comments, comment.result];
    });
  }

}
