import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  api_url = "https://jsonplaceholder.typicode.com"

  public getUser(): Observable<any> {
    return this.http.get(this.api_url + '/users');
  }

  public getAlbums(): Observable<any> {
    return this.http.get(this.api_url + '/albums');
  }

  public getPosts(): Observable<any> {
    return this.http.get(this.api_url + '/posts');
  }

  public getPhotos(): Observable<any> {
    return this.http.get(this.api_url + '/photos');
  }

  public getComments(): Observable<any> {
    return this.http.get(this.api_url + '/comments');
  }
}
