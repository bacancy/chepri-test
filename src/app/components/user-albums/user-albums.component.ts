import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromUser from "../../store/user.selectors";
import { IAlbum } from 'src/app/model/album.model';
import { IPhoto } from 'src/app/model/photo.model';
@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {

  @Input() userId: number;
  albumArray: IAlbum[];
  photoArray: IPhoto[];
  collapseArray = [];
  ErrorMsg: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(select(fromUser.getAlbumById({ id: this.userId }))).subscribe(
      res => {
        // get album data
        this.albumArray = res.albums;
        this.albumArray.forEach(element => {
          this.collapseArray.push({ isCollapsed: true });
        });        
      }, err => {
        console.log(err);
      });

  }
  
  // for toggle collapse
  toggle(i, item) {
    this.collapseArray[i].isCollapsed = !this.collapseArray[i].isCollapsed;
    this.store.pipe(select(fromUser.getPhotoById({ id: item.id }))).subscribe(
      res => {
        this.photoArray = res.photos.slice(0, 5);
      }, err => {
        console.log(err);
      });
  }
}
