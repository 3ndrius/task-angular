import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../service/http.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;

  info: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  addUser() {
    let user = {first_name: this.firstName, last_name: this.lastName, email: this.email, gender: 'male' };
    console.log(user);
    this.httpService.addUser(user).subscribe( user => {
      console.log(user);
      this.info = "Added user successfully"
    });
  }
}
