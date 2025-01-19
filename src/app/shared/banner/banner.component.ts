import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import {model} from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [
    GalleriaModule
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit{

  images: any[] = [];

  responsiveOptions: any[] = [
      {
          breakpoint: '1300px',
          numVisible: 4
      },
      {
          breakpoint: '575px',
          numVisible: 1
      }
  ];

  constructor() {

  }
  
  ngOnInit() {
    this.images = this.getImages();
    console.log(this.images);
  }

  getImages() {
    return [
      {
        itemImageSrc: 'banner/adobe-creative.jpg',
        thumbnailImageSrc: 'banner/adobe-creative.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'banner/capa.webp',
        thumbnailImageSrc: 'banner/capa.webp',
        alt: 'Description for Image 1',
        title: 'Title 1'
      }
    ]
  }

  handleValueChange(newValue: any): void {
    this.images = newValue; // Ou o que quer que precise ser feito com o novo valor
  }

}
