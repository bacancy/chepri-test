
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../_interfaces/post';
import { IComment } from '../_interfaces/comment';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient) { }

    public getPosts(): Observable<IPost[]> {
        return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
    }

    public getComments(): Observable<IComment[]> {
        return this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments');
    }

    public SavePost(postData : any): Observable<IPost> {
        return this.http.post<IPost>('https://jsonplaceholder.typicode.com/posts', postData);
    }
}
