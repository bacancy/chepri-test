import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPhotoComponent } from './get-photo.component';

describe('GetPhotoComponent', () => {
  let component: GetPhotoComponent;
  let fixture: ComponentFixture<GetPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
