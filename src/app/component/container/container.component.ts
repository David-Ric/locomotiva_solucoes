import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./contanier.component.scss']
})
export class ContainerComponent implements OnInit {
  badgevisible = false;
  dynamicText = 'Sites';
  nomes = ['Sites', 'Sistemas Web', 'Aplicativos Mobile', 'Aplicações Desktop'];
  intervalId: any;

  ngOnInit() {
    this.startTextAnimation();
  }

  badgevisibility() {
    this.badgevisible = true;
  }

  startTextAnimation() {
    let currentIndex = 0;

    this.intervalId = setInterval(() => {
      this.dynamicText = this.nomes[currentIndex];
      currentIndex = (currentIndex + 1) % this.nomes.length;
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}

