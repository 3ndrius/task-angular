import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  token = "O9T7PYO6wJd4H89VMtvqlwF62GmjPiovkj8d"
  getAllUsers(): Observable<any> {
    return this.http.get(`https://gorest.co.in/public-api/users?_format=json&access-token=${this.token}`);
  }

  getSingleUser(id: number): Observable<any> {

    return this.http.get(`https://gorest.co.in/public-api/users/${id}?_format=json&access-token=${this.token}`);
  }

  editUser(user:any): Observable<any> {
    console.log("user",user);
    return this.http.put(`https://gorest.co.in/public-api/users/${user.id}?$`, user,
    { headers: new HttpHeaders({
       'Content-Type': "application/json",
       'Authorization': 'Bearer O9T7PYO6wJd4H89VMtvqlwF62GmjPiovkj8d'
       })
   });
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`https://gorest.co.in/public-api/users?$`, user,
     { headers: new HttpHeaders({
        'Content-Type': "application/json",
        'Authorization': 'Bearer O9T7PYO6wJd4H89VMtvqlwF62GmjPiovkj8d'
        })
    });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`https://gorest.co.in/public-api/users/${id}?_format=json&access-token=${this.token}`);
  }



  getAllPosts(): Observable<any> {
    return this.http.get(`https://gorest.co.in/public-api/posts?_format=json&access-token=${this.token}`);
  }

  getSinglePost(id:number): Observable<any> {
    return this.http.get(`https://gorest.co.in/public-api/posts/${id}?_format=json&access-token=${this.token}`);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`https://gorest.co.in/public-api/posts/${id}?_format=json&access-token=${this.token}`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post(`https://gorest.co.in/public-api/posts?$`, post,
     { headers: new HttpHeaders({
        'Content-Type': "application/json",
        'Authorization': 'Bearer O9T7PYO6wJd4H89VMtvqlwF62GmjPiovkj8d'
        })
    });
  }

  editPost(post:any): Observable<any> {
    return this.http.put(`https://gorest.co.in/public-api/posts/${post.id}`, post,
    { headers: new HttpHeaders({
       'Content-Type': "application/json",
       'Authorization': 'Bearer O9T7PYO6wJd4H89VMtvqlwF62GmjPiovkj8d'
       })
   });
  }

  showUserPosts(user): Observable<any>{
    console.log(user);
    return this.http.get(`https://gorest.co.in/public-api/posts?_format=json&user_id=${user.id}&access-token=${this.token}`);
  }

  loadComments(post:any): Observable<any>{
    return this.http.get(`https://gorest.co.in/public-api/comments?_format=json&post_id=${post.id}&sort=post_id&access-token=${this.token}`);
  }

  addComment(comment: any): Observable<any> {
    return this.http.post(`https://gorest.co.in/public-api/comments?$`, comment,
    { headers: new HttpHeaders({
       'Content-Type': "application/json",
       'Authorization': 'Bearer O9T7PYO6wJd4H89VMtvqlwF62GmjPiovkj8d'
       })
   });
  }
}
