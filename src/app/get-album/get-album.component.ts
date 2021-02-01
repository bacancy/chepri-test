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
   this.userId = this.activatedRoute.snapshot.paramMap.get('userId')
   //this._store.dispatch(new fromUsers.GetUserLoad());
    const albums$ = this._store.pipe(select(fromUsers.getAlbumById, { myUserId: this.userId }));

    albums$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.albums = res.data;
    });
  }

  viewPhotos(albumId) {
    this.router.navigate(['photos',albumId]);
  }

  back() {
    this.location.back();
  }

}
