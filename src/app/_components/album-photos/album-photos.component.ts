import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../../store";
import { Store, select } from '@ngrx/store';
import { IPhoto } from '../../_interfaces/photo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent implements OnInit {
  
  albumPhotos: IPhoto[] = [];
  albumId: string = '';
  constructor(
    private _store: Store<fromUsers.IState>,
    private activatedRoute: ActivatedRoute,
    private location:Location) { }

  ngOnInit() {
    this.albumId = this.activatedRoute.snapshot.paramMap.get('albumId');
    const photos$ = this._store.pipe(select(fromUsers.getPhotoById, { albumId: this.albumId }));

    photos$.subscribe(res => {
      this.albumPhotos = res.data;
    });
  }
  
  back() {
    this.location.back();
  }
}
