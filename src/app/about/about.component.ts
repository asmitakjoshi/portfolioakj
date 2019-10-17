import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // what doing start

  doing = [
    {
      img: 'assets/icons/icon-design.svg',
      textf: 'Web Design',
      texts: 'The most modern and high-quality design made at a professional level.',
    },
    {
      img: 'assets/icons/icon-design.svg',
      textf: 'Daniel Lewis',
      texts: 'Felecia was hired to create a corporate identity. We were very pleased with the work done.',
    },
    {
      img: 'assets/icons/icon-design.svg',
      textf: 'Daniel Lewis',
      texts: 'Felecia was hired to create a corporate identity. We were very pleased with the work done.',
    },
    {
      img: 'assets/icons/icon-design.svg',
      textf: 'Daniel Lewis',
      texts: 'Felecia was hired to create a corporate identity. We were very pleased with the work done.',
    },
  ];
  
  // what doing end


  // testimonial start

  public show: boolean = true;
  public slides = [
    {
      img: '../assets/images/1.png',
      textf: 'Daniel Lewis',
      texts: 'Felecia was hired to create a corporate identity. We were very pleased with the work done.',
    },
    {
      img: '../assets/images/2.png',
      textf: 'Jessica Miller',
      texts: 'thanks to the skill of Felecia, we have a design that we can be proud of.',
    },
    {
      img: '../assets/images/1.png',
      textf: 'Daniel Lewis',
      texts: 'Felecia was hired to create a corporate identity. We were very pleased with the work done.',
    },
    {
      img: '../assets/images/2.png',
      textf: 'Daniel Lewis',
      texts: 'Felecia was hired to create a corporate identity. We were very pleased with the work done.',
    },
   
  ];
  
  public type: string = 'component';
  
  public disabled: boolean = false;
  
  public config: SwiperConfigInterface = {
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    watchOverflow: true,
    centeredSlides: false,
          pagination: {
              el: '.swiper-pagination',
          clickable: true
          },
    autoplay: {
              delay: 5000,
          },
    breakpoints: {
              991: {
                  slidesPerView: 1,
                  spaceBetween: 0
              }
          }
  };

  // testimonial end

}
