import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { IsotopeOptions } from 'ngx-isotope';
import mediumZoom from 'medium-zoom';
declare var $: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  gallery = [
    {
      img: '../../assets/images/image_01.jpg',
      fname: 'Half Avocado',
      sname: 'Concept',
      nav: '../../assets/images/image_01.jpg'
    },
    {
      img: '../../assets/images/image_02.jpg',
      fname: 'Half Avocado',
      sname: 'Concept',
    },
    {
      img: '../../assets/images/image_03.jpg',
      fname: 'Half Avocado',
      sname: 'Concept',
    },
    {
      img: '../../assets/images/image_04.jpg',
      fname: 'Half Avocado',
      sname: 'Concept',
    },
    {
      img: '../../assets/images/image_05.jpg',
      fname: 'Half Avocado',
      sname: 'Concept',
    }
  ];

  constructor() { }

  ngOnInit() {
    const zoomDefault = mediumZoom('#zoom-default')

    var $portfolioMasonry = $('.js-masonry').isotope({
      itemSelector: '.gallery-grid__item',
      layoutMode: 'fitRows',
      percentPosition: false,
      transitionDuration: '0.5s',
      hiddenStyle: {
        opacity: 0,
        transform: 'scale(0.001)'
      },
      visibleStyle: {
        opacity: 1,
        transform: 'scale(1)'
      },
      fitRows: {
        gutter: '.gutter-sizer'
      },
      masonry: {
        columnWidth: '.gallery-grid__item',
        gutter: '.gutter-sizer',
        isAnimated: true
      }
    });

    $portfolioMasonry.imagesLoaded().progress(function () {
      $portfolioMasonry.isotope({
        columnWidth: '.gallery-grid__item',
        gutter: '.gutter-sizer',
        isAnimated: true,
        layoutMode: 'fitRows',
        fitRows: {
          gutter: '.gutter-sizer'
        }
      });
    });



  }

  public myOptions: IsotopeOptions = {
    itemSelector: '.grid-item',
  };

  
}
