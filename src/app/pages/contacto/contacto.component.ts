import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.closeItem();
  }

 

   closeItem(): void {
    const productsModel = document.querySelectorAll(".products-model");
    const imgCards = document.querySelectorAll(".img-card");
    const productsCloseBtn = document.querySelectorAll(".products-close-btn");

    var productModal:any = function (modalclick:any) {
        productsModel[modalclick].classList.add('active');
    }

    imgCards.forEach((imgCard, i) => {
        imgCard.addEventListener("click", () => {
          productModal(i);
        });
    });

    productsCloseBtn.forEach((productsCloseBtn) => {
      productsCloseBtn.addEventListener("click", () =>{
        productsModel.forEach((productsModelView) => {
          productsModelView.classList.remove("active");
        });
      });
    });
  }



}
