import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'LaunchWeb — Home' },
  { path: 'services', component: ServicesComponent, title: 'LaunchWeb — Services' },
  { path: 'about', component: AboutComponent, title: 'LaunchWeb — About' },
  { path: 'work', component: WorkComponent, title: 'LaunchWeb — Work' },
  { path: 'contact', component: ContactComponent, title: 'LaunchWeb — Contact' },
  { path: '**', redirectTo: '' },
];
