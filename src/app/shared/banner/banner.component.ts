import { Component, HostListener, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { model } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [
    GalleriaModule
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {

  imagesSmall: any[] = [];
  imagesLarge: any[] = [];

  isSmallScreen = false;

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
    this.getImages();
    console.log(this.imagesLarge);
    console.log(this.imagesSmall);
  }

  getImages() {
    this.imagesSmall = [{
      itemImageSrc: 'banner/banner_mobile_1.png',
      thumbnailImageSrc: 'banner/adobe-creative.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: 'banner/banner_mobile_2.png',
      thumbnailImageSrc: 'banner/capa.webp',
      alt: 'Description for Image 1',
      title: 'Title 1'
    }]

    this.imagesLarge = [
      {
        itemImageSrc: 'banner/Tecnologia_de_Valor_Licencas_de_Windows_Office_1.png',
        thumbnailImageSrc: 'banner/adobe-creative.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'banner/Tecnologia_de_Valor_Licencas_de_Windows_Office_2.png',
        thumbnailImageSrc: 'banner/capa.webp',
        alt: 'Description for Image 1',
        title: 'Title 1'
      }
    ]

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 950;
  }
}