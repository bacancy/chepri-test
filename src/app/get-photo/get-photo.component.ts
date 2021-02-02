import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../store";
import { Store, select } from '@ngrx/store';
import { IPhoto } from '../_interfaces/photo';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-get-photo',
  templateUrl: './get-photo.component.html',
  styleUrls: ['./get-photo.component.scss']
})
export class GetPhotoComponent implements OnInit {

  
  photos: IPhoto[] = [];
  public isLoading: boolean;
  albumId: string = '';
  constructor(
    private _store: Store<fromUsers.IState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    //get albumId from params
    this.albumId = this.activatedRoute.snapshot.paramMap.get('albumId')
    const photos$ = this._store.pipe(select(fromUsers.getPhotoById, { myAlbumId: this.albumId }));

    photos$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.photos = res.data;
    });
  }
  
  // redirect to back
  back() {
    this.location.back();
  }

}
