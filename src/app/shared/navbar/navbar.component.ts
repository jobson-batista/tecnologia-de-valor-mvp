import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    Menubar,
    Ripple,
    CommonModule,
    InputTextModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  items: MenuItem[] | undefined;
  logged = true;

  constructor() {}

  ngOnInit() {
    this.loadMenuItems();
  }

  loadMenuItems() {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-home',
        route: '/'
      },
      {
        label: 'Produtos',
        icon: 'pi pi-info-circle',
        route: '/products'
      },
      {
        label: 'Quem somos',
        icon: 'pi pi-info-circle',
        route: '/about'
      },
      {
        label: 'Contato',
        icon: 'pi pi-info-circle',
        route: '/contact'
      },
      {
        label: 'Política de Garantia',
        icon: 'pi pi-info-circle',
        route: '/warranty-policy'
      }
    ]
  }
}
