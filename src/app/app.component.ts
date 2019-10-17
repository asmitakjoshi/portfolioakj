import { Component, OnInit, Inject, HostListener } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;
import { TimelineLite,TimelineMax, Back } from 'gsap'
import { DOCUMENT } from '@angular/common';


@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  static tl: TimelineLite = new TimelineLite();
  title = 'portfolio';
  constructor(@Inject(DOCUMENT) document) { }
  ngOnInit() {
  $(document).ready(function() {

    'use strict';
  var $sideNavOpen = $('.hamburger');
  var tl = new TimelineMax({paused:true, reversed:true});

  if (window.matchMedia("(max-width: 580px)").matches) {
      $('.inner-menu').each(function(i) {
          tl.timeScale(1);
          tl.fromTo('.nav', 1.0, {
        width: '0',
      opacity: 0,
      force3D:true
          }, {
        width: '100%',
      opacity: 1,
        ease: Back.easeOut
      })
          .staggerFrom('.nav__item', 0.2, {
              opacity: 0,
              x: 70,
              ease: Back.easeOut
          },0.06, '-=0.5');
      }); 
  } else {
      $('.inner-menu').each(function(i) {
          tl.timeScale(1);
          tl.fromTo('.nav', 1.0, {
        width: '0'
          }, {
        width: '100%',
        ease: 'Bounce.easeOut'
      })
          .staggerFrom('.nav__item', 0.2, {
              opacity: 0,
              x: 70,
              ease: Back.easeOut
          },0.06, '-=0.25');
      });  
  }

  $sideNavOpen.on('click', function() {
      tl.reversed() ? tl.play() : tl.reverse();	
  });

  $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
	    $('.inner-menu').toggleClass('is-active');
		$('body').toggleClass('open-menu');
    });

   
});
function activeStickyKit() {
  $('.sticky-column').stick_in_parent({
      parent: '.sticky-parent'
  });

  $('.sticky-column')
  .on('sticky_kit:bottom', function(e) {
      $(this).parent().css('position', 'static');
  })
  .on('sticky_kit:unbottom', function(e) {
      $(this).parent().css('position', 'relative');
  });
};
activeStickyKit();

function detachStickyKit() {
  $('.sticky-column').trigger("sticky_kit:detach");
};

  
}
@HostListener('window:scroll', ['$event'])
onWindowScroll(e) {
   if (window.pageYOffset > 100) {
     let element = document.getElementById('sidebar');
     element.classList.add('is_stuck');
   } else {
    let element = document.getElementById('sidebar');
      element.classList.remove('is_stuck'); 
   }
}



}
