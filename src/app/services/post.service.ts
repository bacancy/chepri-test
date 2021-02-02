
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IPost } from '../models/post.interface';
import { HttpClient } from '@angular/common/http';
import { IComment } from '../models/comment.interface';

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
