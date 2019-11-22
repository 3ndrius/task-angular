import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../service/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  info: string = '';
  singleUser:any;
  firstName:string;
  lastName: string;
  email:string;
  id: number;
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.singleUser = params['id'];
      this.httpService.getSingleUser(this.singleUser).subscribe(user => {
        console.log(user);
        this.singleUser = user.result;
        this.id = this.singleUser.id;
        this.firstName = this.singleUser.first_name;
        this.lastName = this.singleUser.last_name;
        this.email = this.singleUser.email;
      });
    });
  }

  editUser() {
    let user = {id:this.id, first_name: this.firstName, last_name: this.lastName, email: this.email, gender: 'male' };
    this.httpService.editUser(user).subscribe( user => {
      console.log(user);
      this.info = "Edit user successfully";
    });
  }
}
