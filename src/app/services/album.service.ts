
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAlbum } from '../models/album.interface';

@Injectable({
    providedIn: 'root'
})
export class AlbumService {

    constructor(private http: HttpClient) { }

    public getAlbums(): Observable<IAlbum[]> {
        return this.http.get<IAlbum[]>('https://jsonplaceholder.typicode.com/albums');
    }
}
