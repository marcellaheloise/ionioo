import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  phrases = [

    'É possível alcançar a verdade absoluta, ou estamos limitados à nossa perspectiva limitada?',

    'Qual é a natureza do tempo: uma ilusão, uma dimensão física ou algo mais complexo?',

    'A existência de Deus pode ser comprovada pela razão, ou é uma questão de fé?',

    'Existe um limite ético para a busca do conhecimento científico?',
    
    'Qual é a origem da consciência e ela pode ser explicada puramente pela ciência?',
    
    'A vida tem algum significado objetivo, ou é apenas o resultado de processos físicos sem sentido?',
    
    'Podemos realmente conhecer a nós mesmos, ou estamos sempre limitados por nossos próprios preconceitos e perspectivas?',

    'Qual é o papel da arte e da criatividade na busca por significado e verdade?',

    'Existe uma diferença fundamental entre o bem e o mal, ou são conceitos subjetivos dependentes do contexto cultural e social?',

    'Até que ponto podemos confiar em nossos sentidos e na nossa percepção da realidade?',
  ];


  getRandomPhrase() {

    const randomIndex = Math.floor(Math.random() *        this.phrases.length);

    return this.phrases[randomIndex];

  }

}
