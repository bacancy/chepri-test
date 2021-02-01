
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPhoto } from '../interfaces/photo';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor(private http: HttpClient) { }

    public getPhotos(): Observable<IPhoto[]> {
        return this.http.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos');
    }
}
