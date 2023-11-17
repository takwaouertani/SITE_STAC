import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit{
  ngAfterViewInit() {
    const minim = document.querySelector(".minimenu") as HTMLElement;
    const navLinks = document.querySelector(".links") as HTMLElement;

    minim.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-menu');
    });
  }
}
