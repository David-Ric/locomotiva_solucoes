// card.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  cards = [
    {
      imagem: 'https://pbs.twimg.com/media/Dp5LQ_RWoAMBY13.jpg',
      titulo: 'Nossa Equipe',
      descricao: 'Nossa equipe é formada por profissionais altamente qualificados.'
    },
    {
      imagem: '../../../assets/image/nossaHistoria.png',
      titulo: 'Nossa História',
      descricao: 'Estamos no mercado desde o ano de 2000, proporcionando soluções inovadoras.'
    },
    {
      imagem: '../../../assets/image/nossEspecialidade.png',
      titulo: 'Nossas Especialidades',
      descricao: 'Somos especialistas em desenvolvimento web, mobile e sistemas desktop.'
    }

  ];
}
