import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  allUser:any;
  SingleUser:any;
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.httpService.getAllUsers().subscribe(users => {
     this.allUser = users.result;
    });
  }
  onSelect(user) {
    this.router.navigate(['/users', user.id]);

  }
  deleteUser(user) {
    let ids = user.id
    this.httpService.deleteUser(user.id).subscribe((user) => {
      this.allUser = this.allUser.filter(u => {
        return u.id !== ids;
      });
    });
  }


}
