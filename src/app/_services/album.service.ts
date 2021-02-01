
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAlbum } from '../_interfaces/album';

@Injectable({
    providedIn: 'root'
})
export class AlbumService {

    constructor(private http: HttpClient) { }

    public getAlbums(): Observable<IAlbum[]> {
        return this.http.get<IAlbum[]>('https://jsonplaceholder.typicode.com/albums');
    }
}
