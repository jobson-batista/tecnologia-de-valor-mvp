import { Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { NumberFormatPipe } from '../../pipes/number-format.pipe';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-carousel-products',
  imports: [
    CommonModule,
    PaginatorModule,
    CarouselModule,
    ButtonModule,
    NumberFormatPipe,
    TagModule
  ],
  templateUrl: './carousel-products.component.html',
  styleUrl: './carousel-products.component.css'
})
export class CarouselProductsComponent {

  responsiveOptions: any[] | undefined;

  @Input() products: Product[] = [];

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '900px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }

}
