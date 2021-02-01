
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../_interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    public getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    }
}
