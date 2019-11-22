import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../service/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {


  singleUser:any;
  posts: any;
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.singleUser = params['id'];
        console.log(this.singleUser, "user");
        this.httpService.getSingleUser(this.singleUser).subscribe(user => {
          this.singleUser = user.result;
        });
      });
    }

    showUserPosts() {
      this.httpService.showUserPosts(this.singleUser).subscribe(posts => {
        console.log(posts);
        this.posts = posts.result;
      })
    }

}
