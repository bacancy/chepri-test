import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../../store";
import { Store, select } from '@ngrx/store';
import { IPhoto } from '../../interfaces/photo';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {


  photos: IPhoto[] = [];
  public isLoading: boolean;
  albumId: string = '';
  userId: string = '';

  constructor(
    private router: Router,
    private localStore: Store<fromUsers.IState>,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.albumId = this.activatedRoute.snapshot.paramMap.get('albumId')
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId')

    const photos$ = this.localStore.pipe(select(fromUsers.getPhotoById, { myAlbumId: this.albumId }));

    photos$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.photos = res.data;
    });
  }

  /** go Back to the album */
  goBack() {
    this.router.navigate(['albums', this.userId]);
  }
}
