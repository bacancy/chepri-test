import * as fromUsers from "../../store";
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { IAlbum } from "src/app/models/album.interface";
import { Location } from '@angular/common';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    private _store: Store<fromUsers.IState>,
    private activatedRoute: ActivatedRoute)
  { }

  userId: string = '';
  albums: IAlbum[] = [];
  isLoading: boolean = false;

  ngOnInit() {
   this.userId = this.activatedRoute.snapshot.paramMap.get('userId')
    const albums$ = this._store.pipe(select(fromUsers.getAlbumById, { myUserId: this.userId }));

    albums$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.albums = res.data;
    });
  }

  viewPhotos(albumId: any) {
    this.router.navigate(['photos',albumId]);
  }

  navigatoBack(): void {
    this.location.back();
  }

}
