import * as fromUsers from "../../store";
import { Store, select } from '@ngrx/store';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from "src/app/models/photo.interface";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(
    private location: Location,
    private _store: Store<fromUsers.IState>,
    private activatedRoute: ActivatedRoute) 
  {}

  photos: IPhoto[] = [];
  albumId: string = '';
  isLoading: boolean = false;

  ngOnInit() {
    this.albumId = this.activatedRoute.snapshot.paramMap.get('albumId')
    const photos$ = this._store.pipe(select(fromUsers.getPhotoById, { myAlbumId: this.albumId }));

    photos$.subscribe(res => {
      this.photos = res.data;
      this.isLoading = res.isLoading;
    });
  }

  navigatoBack(): void {
    this.location.back();
  }

}
