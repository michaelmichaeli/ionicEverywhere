import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  isDesktop: Observable<boolean>;

  constructor(private screenSizeService: ScreenSizeService) { 
    this.isDesktop = this.screenSizeService.isDesktopView();
  }
  
  ngOnInit() {
  }

}
