import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../store";
import { Store, select } from '@ngrx/store';
import { IAlbum } from '../_interfaces/album';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-get-album',
  templateUrl: './get-album.component.html',
  styleUrls: ['./get-album.component.scss']
})
export class GetAlbumComponent implements OnInit {

  
  albums: IAlbum[] = [];
  public isLoading: boolean;
  userId: string = '';
  constructor(
    private _store: Store<fromUsers.IState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    //get userId from params
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId')
  
    const albums$ = this._store.pipe(select(fromUsers.getAlbumById, { myUserId: this.userId }));
    albums$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.albums = res.data;
    });
  }

  // redirect to photos route
  viewPhotos(albumId) {
    this.router.navigate(['photos',albumId]);
  }

  // redirect to back
  back() {
    this.location.back();
  }

}
