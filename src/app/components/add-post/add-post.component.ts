import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../service/http.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  title: string;
  body: string;

  info: string;
  constructor(private httpService: HttpService) { }

  ngOnInit() {

  }
  addPost() {
    let post = {title: this.title, body: this.body, user_id: 7 };
    console.log(post);
    this.httpService.addPost(post).subscribe( post => {
      console.log(post);
      this.info = "Added post successfully"
    });
  }

}
