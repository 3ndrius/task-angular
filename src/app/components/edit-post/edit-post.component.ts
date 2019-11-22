import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../../service/http.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  info: string = '';
  singlePost:any;
  title:string;
  body: string;
  id: number;
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }
   ngOnInit() {
    this.route.params.subscribe(params => {
      this.singlePost = params['id'];
      this.httpService.getSinglePost(this.singlePost).subscribe(post => {
        console.log(post);
        this.singlePost = post.result;
        this.id = this.singlePost.id;
        this.title = this.singlePost.title;
        this.body = this.singlePost.body;

      });
    });
  }

  editPost() {
    let post = {id:this.id, title: this.title, body: this.body};
    this.httpService.editPost(post).subscribe( post => {
      console.log(post);
      this.info = "Edit post successfully";
    });
  }
}
