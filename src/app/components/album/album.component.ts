import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../../store";
import { Store, select } from '@ngrx/store';
import { IAlbum } from '../../interfaces/album';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albums: IAlbum[] = [];
  public isLoading: boolean;
  userId: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localStore: Store<fromUsers.IState>,
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId')
    const albums$ = this.localStore.pipe(select(fromUsers.getAlbumById, { myUserId: this.userId }));

    albums$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.albums = res.data;
    });
  }

  /** View list of photos from the album */
  viewPhotos(albumId) {
    this.router.navigate(['photos', this.userId, albumId]);
  }

  /** go Back to the album */
  goBack() {
    this.router.navigate(['dashboard']);
  }
}
