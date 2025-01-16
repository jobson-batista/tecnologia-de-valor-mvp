import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WarrantyPolicyComponent } from './pages/warranty-policy/warranty-policy.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'warranty-policy', component: WarrantyPolicyComponent },
    { path: 'cart', component: CartComponent },

    { path: '**', component: NotFoundComponent},
];
