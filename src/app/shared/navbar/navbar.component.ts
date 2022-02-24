import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  ScrollNav():void {
    var navbar = document.getElementById("navbar");
    var insc = document.getElementById("btn-insc");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar?.classList.add("shadow");
        navbar?.classList.add("nav-custom");
        insc?.classList.remove("btn-insc");
        insc?.classList.add("btn-insc-sm");
    } else {
        navbar?.classList.remove("shadow");
        navbar?.classList.remove("nav-custom");
        insc?.classList.add("btn-insc");
        insc?.classList.remove("btn-insc-sm");
    }
 
}

}
