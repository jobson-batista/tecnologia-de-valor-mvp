import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
