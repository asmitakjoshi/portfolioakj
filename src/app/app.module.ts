import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { IsotopeModule } from 'ngx-isotope';
import { AgmCoreModule } from '@agm/core';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SwiperModule,
    IsotopeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAoqo37x-YFOe_WDKu8NzFKcv1yLRhoRhg',
      libraries: ['places']
    })
  
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
