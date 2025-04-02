import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"about-us", component:AboutUsComponent},
    {path:"contact-us", component:ContactUsComponent},
    {path:"services", component:ServicesComponent},
];
