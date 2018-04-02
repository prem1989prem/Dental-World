import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';


import { RouterModule }   from '@angular/router'; 

import { MianComponent } from './mian/mian.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DepartmentsComponent } from './departments/departments.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmantComponent } from './appointmant/appointmant.component';
import { SliderComponent } from './slider/slider.component';
import { CaseComponent } from './case/case.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  imports: [
    BrowserModule,FormsModule,    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent   
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'departments',
        component: DepartmentsComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
     
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'appointmant',
        component: AppointmantComponent
      }
      
    ])
    
  ],
  declarations: [
    AppComponent,
    MianComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    DepartmentsComponent,
    GalleryComponent,
    ContactComponent,
    AppointmantComponent,
    SliderComponent,
    CaseComponent,
    TreatmentsComponent,
    WelcomeComponent
    
  ],
  
  providers: [],
  bootstrap: [MianComponent]
})
export class AppModule { }
