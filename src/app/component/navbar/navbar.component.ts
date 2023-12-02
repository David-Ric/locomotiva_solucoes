import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  badgevisible = false;
  isMenuOpen = false;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    const containerElement = document.querySelector('.container');

    if (containerElement) {
      if (scrollY > 10) {

        containerElement.classList.add('scroll');
      } else {

        containerElement.classList.remove('scroll');
      }
    }
  }

  badgevisibility() {
    this.badgevisible = true;
  }
}


