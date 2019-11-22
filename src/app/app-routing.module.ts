import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

import { PostListComponent } from './components/post-list/post-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

const routes: Routes = [
  {path: 'users' , component: UsersComponent},
  {path: 'posts' , component: PostListComponent},
  {path: 'posts/add', component: AddPostComponent},
  {path: 'posts/:id', component: SinglePostComponent},
  {path: 'posts/edit/:id', component: EditPostComponent},
  {path: 'users/add', component: AddUserComponent},
  {path: 'users/:id', component: SingleUserComponent},
  {path: 'users/edit/:id', component: EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ UsersComponent, UsersComponent, AddUserComponent, EditUserComponent, PostListComponent, AddPostComponent, SinglePostComponent, EditPostComponent ]
