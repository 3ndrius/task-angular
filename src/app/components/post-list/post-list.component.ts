import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  allPosts: any;
  singlePost: any;
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.httpService.getAllPosts().subscribe(posts => {
      console.log(posts);
      this.allPosts = posts.result;
    });
  }

  onSelect(post) {
    this.router.navigate(['/posts', post.id]);

  }
  deletePost(post) {
    let ids = post.id;
    this.httpService.deleteUser(post.id).subscribe((post) => {
      this.allPosts = this.allPosts.filter(p => {
        return p.id !== ids;
      });
    });
  }


}
