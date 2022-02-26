import { Component, OnInit } from '@angular/core';

import { Autoplay, Swiper, EffectCards, EffectCreative } from 'swiper';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

SwiperCore.use([ Autoplay, Pagination]);


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    new Swiper('.swiper', {
     
      effect: 'cards',
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  
  }

}
