import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { DividerModule } from 'primeng/divider';
import { SearchComponent } from '../../shared/search/search.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../model/product.model';
import { CarouselProductsComponent } from '../../shared/carousel-products/carousel-products.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    DividerModule,
    SearchComponent,
    FooterComponent,
    CardModule,
    CommonModule,
    PaginatorModule,
    CarouselModule,
    ButtonModule,
    CarouselProductsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: Product[] = []
  responsiveOptions: any[] | undefined;


  ngOnInit() {
    this.products = this.getProdutos();
  }

  getProdutos(): Product[] {
    return [
      {
        urlImage: 'https://centraldaslicencas.net.br/wp-content/uploads/2023/08/Windows-11-Professional.jpg',
        price: 179.90,
        name: 'Windows 11 Professional - Vitalício',
        star: 5,
        reviews: 125
      },
      {
        urlImage: 'https://centraldaslicencas.net.br/wp-content/uploads/2023/08/Windows-11-Office-2019.jpg',
        price: 384.90,
        name: 'Windows 11 Pro + Office 2019 Pro',
        star: 5,
        reviews: 1715
      },
      {
        urlImage: 'https://centraldaslicencas.net.br/wp-content/uploads/2023/08/Office-2021.jpg',
        price: 328.90,
        name: 'Office 2021 Professional Plus - Vitalício',
        star: 5,
        reviews: 1250
      },
      {
        urlImage: 'https://centraldaslicencas.net.br/wp-content/uploads/2023/08/Windows-10-Pro.jpg',
        price: 165.90,
        name: 'Windows 10 Professional - Vitalício',
        star: 5,
        reviews: 2679
      },
      {
        urlImage: 'https://centraldaslicencas.net.br/wp-content/uploads/2023/08/Office-2021.jpg',
        price: 328.90,
        name: 'Office 2021 Professional Plus - Vitalício',
        star: 5,
        reviews: 1250
      },
      {
        urlImage: 'https://centraldaslicencas.net.br/wp-content/uploads/2023/08/Windows-10-Pro.jpg',
        price: 165.90,
        name: 'Windows 10 Professional - Vitalício',
        star: 5,
        reviews: 2679
      },
      {
        urlImage: 'https://centraldaslicencas.net.br/wp-content/uploads/2023/08/Windows-11-Professional.jpg',
        price: 179.90,
        name: 'Windows 11 Professional - Vitalício',
        star: 5,
        reviews: 125
      },
      {
        urlImage: 'https://centraldaslicencas.net.br/wp-content/uploads/2023/08/Windows-11-Office-2019.jpg',
        price: 384.90,
        name: 'Windows 11 Pro + Office 2019 Pro',
        star: 5,
        reviews: 1715
      },
      {
        urlImage: 'https://centraldaslicencas.net.br/wp-content/uploads/2023/08/Office-2021.jpg',
        price: 328.90,
        name: 'Office 2021 Professional Plus - Vitalício',
        star: 5,
        reviews: 1250
      }
    ]
  }
}
