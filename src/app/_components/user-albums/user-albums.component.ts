import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../../store";
import { Store, select } from '@ngrx/store';
import { IAlbum } from '../../_interfaces/album';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {
  usersAlbums: IAlbum[] = [];
  userId: string = '';
  constructor(
    private _store: Store<fromUsers.IState>,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    const albums$ = this._store.pipe(select(fromUsers.getAlbumById, { userId: this.userId }));

    albums$.subscribe(res => {
      this.usersAlbums = res.data;
    });
  }

  viewPhotos(albumId) {
    this.router.navigate(['album-photos',albumId]);
  }

  back() {
    this.router.navigate(['/users']);
  }

}
