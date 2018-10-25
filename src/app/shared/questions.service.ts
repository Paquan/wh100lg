import { Injectable } from '@angular/core';

@Injectable()
export class QuestionsService {
  players: Array<string> = ['Daniel', 'Milka'];
  questions = [
    {
      question: 'Nenne einen Gegenstand ohne den du das Haus nicht verlassen würdest',
      options: [
        {
          answer: 'Bibel',
          percent: 1
        },
        {
          answer: 'Brille',
          percent: 2
        },
        {
          answer: 'Ehering',
          percent: 1
        },
        {
          answer: 'Feuchte Tücher',
          percent: 1
        },
        {
          answer: 'Handy',
          percent: 26
        },
        {
          answer: 'Haargummi',
          percent: 1
        },
        {
          answer: 'Kamm',
          percent: 1
        },
        {
          answer: 'Kleidung',
          percent: 7
        },
        {
          answer: 'Kopfhörer',
          percent: 1
        },
        {
          answer: 'Portmonee',
          percent: 3
        },
        {
          answer: 'Regenschirm',
          percent: 1
        },
        {
          answer: 'Schlüssel',
          percent: 19
        },
        {
          answer: 'Tasche',
          percent: 4
        },
      ],
    },
    {
      question: 'Nenne eine beliebte Automarke',
      options: [
        {
          answer: 'Audi',
          percent: 25
        },
        {
          answer: 'BMW',
          percent: 18
        },
        {
          answer: 'Fiat',
          percent: 2
        },
        {
          answer: 'Ford',
          percent: 1
        },
        {
          answer: 'Mercedes',
          percent: 7
        },
        {
          answer: 'Porsche',
          percent: 1
        },
        {
          answer: 'Toyota',
          percent: 1
        },
        {
          answer: 'Volkswagen',
          percent: 15
        },
      ],
    },
    {
      question: 'Nenne ein Tier vor dem Frauen Angst haben',
      options: [
        {
          answer: 'Hund',
          percent: 6
        },
        {
          answer: 'Katze',
          percent: 1
        },
        {
          answer: 'Löwe',
          percent: 1
        },
        {
          answer: 'Maus',
          percent: 12
        },
        {
          answer: 'Ratte',
          percent: 3
        },
        {
          answer: 'Schlange',
          percent: 4
        },
        {
          answer: 'Spinne',
          percent: 43
        },
      ],
    },
    {
      question: 'Nenne ein beliebtes Gericht',
      options: [
        {
          answer: 'Bauerntopf',
          percent: 1
        },
        {
          answer: 'Bratkartoffeln',
          percent: 2
        },
        {
          answer: 'Borscht',
          percent: 2
        },
        {
          answer: 'Canelloni',
          percent: 2
        },
        {
          answer: 'Döner',
          percent: 1
        },
        {
          answer: 'Fisch',
          percent: 1
        },
        {
          answer: 'Frikadellen',
          percent: 1
        },
        {
          answer: 'Hühnersuppe',
          percent: 1
        },
        {
          answer: 'Kartoffelsuppe',
          percent: 1
        },
        {
          answer: 'Lasagne',
          percent: 5
        },
        {
          answer: 'Manti',
          percent: 1
        },
        {
          answer: 'Nudeln (Spagetti)',
          percent: 25
        },
        {
          answer: 'Pelimeni',
          percent: 6
        },
        {
          answer: 'Pizza',
          percent: 10
        },
        {
          answer: 'Plov',
          percent: 1
        },
        {
          answer: 'Schmokomst',
          percent: 1
        },
        {
          answer: 'Schnitzel',
          percent: 6
        },
        {
          answer: 'Steak',
          percent: 1
        },
        {
          answer: 'Wareniki',
          percent: 1
        },
      ],
    },
    {
      question: 'Nenne ein sehr großes Land',
      options: [
        {
          answer: 'Australien',
          percent: 2
        },
        {
          answer: 'Brasilien',
          percent: 3
        },
        {
          answer: 'China',
          percent: 2
        },
        {
          answer: 'Deutschland',
          percent: 1
        },
        {
          answer: 'Kanada',
          percent: 3
        },
        {
          answer: 'Kasachstan',
          percent: 1
        },
        {
          answer: 'Russland',
          percent: 47
        },
        {
          answer: 'USA',
          percent: 11
        },
      ],
    },
    {
      question: 'Nenne ein Tier mit gepunktetem Fell',
      options: [
        {
          answer: 'Dalmatiner',
          percent: 22
        },
        {
          answer: 'Gepard',
          percent: 13
        },
        {
          answer: 'Giraffe',
          percent: 4
        },
        {
          answer: 'Hyäne',
          percent: 2
        },
        {
          answer: 'Jaguar',
          percent: 4
        },
        {
          answer: 'Kuh',
          percent: 2
        },
        {
          answer: 'Leopard',
          percent: 19
        },
        {
          answer: 'Luchs',
          percent: 1
        },
        {
          answer: 'Stinktier',
          percent: 1
        },
      ]
    },
    {
      question: 'Nenne eine beliebte Eissorte',
      options: [
        {
          answer: 'Amarena Kirsch',
          percent: 5
        },
        {
          answer: 'Bum Bum',
          percent: 1
        },
        {
          answer: 'Erdbeere',
          percent: 9
        },
        {
          answer: 'Joghurt',
          percent: 1
        },
        {
          answer: 'Karamell',
          percent: 1
        },
        {
          answer: 'Pistazie',
          percent: 1
        },
        {
          answer: 'Plombier',
          percent: 1
        },
        {
          answer: 'Raffaello',
          percent: 1
        },
        {
          answer: 'Schokolade',
          percent: 13
        },
        {
          answer: 'Stracciatella',
          percent: 13
        },
        {
          answer: 'Vanille',
          percent: 20
        },
        {
          answer: 'Walnuss',
          percent: 3
        },
        {
          answer: 'Zitrone',
          percent: 1
        },
      ]
    },
    {
      question: 'Nenne ein Land, in dem Olivenbäume wachsen',
      options: [
        {
          answer: 'Griechenland',
          percent: 8
        },
        {
          answer: 'Israel',
          percent: 25
        },
        {
          answer: 'Italien',
          percent: 23
        },
        {
          answer: 'Kroatien',
          percent: 3
        },
        {
          answer: 'Libanon',
          percent: 1
        },
        {
          answer: 'Sizilien',
          percent: 1
        },
        {
          answer: 'Spanien',
          percent: 6
        },
        {
          answer: 'Türkei',
          percent: 2
        },
      ]
    },
    {
      question: 'Nenne ein süßes Tier',
      options: [
        {
          answer: 'Affe',
          percent: 2
        },
        {
          answer: 'Eichhörnchen',
          percent: 12
        },
        {
          answer: 'Ferkel',
          percent: 2
        },
        {
          answer: 'Flamingo',
          percent: 1
        },
        {
          answer: 'Hamster',
          percent: 5
        },
        {
          answer: 'Hase / Kaninchen',
          percent: 10
        },
        {
          answer: 'Hund',
          percent: 15
        },
        {
          answer: 'Katze',
          percent: 14
        },
        {
          answer: 'Kücken',
          percent: 1
        },
        {
          answer: 'Maus',
          percent: 1
        },
        {
          answer: 'Panda',
          percent: 2
        },
        {
          answer: 'Pinguin',
          percent: 2
        },
        {
          answer: 'Pony',
          percent: 1
        },
        {
          answer: 'Schildkröte',
          percent: 1
        },
      ]
    },
    {
      question: 'Was reimt sich auf sauer',
      options: [
        {
          answer: 'Aua!',
          percent: 5
        },
        {
          answer: 'Bauer',
          percent: 29
        },
        {
          answer: 'Dauer',
          percent: 1
        },
        {
          answer: 'Konrad Adenauer',
          percent: 1
        },
        {
          answer: 'Lauer',
          percent: 4
        },
        {
          answer: 'Mauer',
          percent: 16
        },
        {
          answer: 'Power',
          percent: 9
        },
        {
          answer: 'Schlauer',
          percent: 2
        },
      ]
    },
    {
      question: 'Nenne etwas, was man für einen Strandurlaub benötigt',
      options: [
        {
          answer: 'Badesachen',
          percent: 17
        },
        {
          answer: 'Buch',
          percent: 3
        },
        {
          answer: 'Geld',
          percent: 1
        },
        {
          answer: 'Schlappen / Flip-Flops',
          percent: 5
        },
        {
          answer: 'Schnorchel',
          percent: 2
        },
        {
          answer: 'Sand',
          percent: 2
        },
        {
          answer: 'Sonnenbrille',
          percent: 4
        },
        {
          answer: 'Sonnencreme',
          percent: 12
        },
        {
          answer: 'Sonnenliege',
          percent: 1
        },
        {
          answer: 'Sonnenschirm',
          percent: 2
        },
        {
          answer: 'Strandtasche',
          percent: 1
        },
        {
          answer: 'Strandtuch',
          percent: 30
        },
      ]
    },
    {
      question: 'Nenne ein scharfes Gewürz',
      options: [
        {
          answer: 'Chili',
          percent: 51
        },
        {
          answer: 'Curry',
          percent: 1
        },
        {
          answer: 'Pfeffer',
          percent: 12
        },
        {
          answer: 'Wasabi',
          percent: 5
        },
      ]
    },
    {
      question: 'Nenne ein besonders farbenprächtiges Tier',
      options: [
        {
          answer: 'Chamäleon',
          percent: 3
        },
        {
          answer: 'Clownfisch',
          percent: 1
        },
        {
          answer: 'Flamingo',
          percent: 1
        },
        {
          answer: 'Giraffe',
          percent: 1
        },
        {
          answer: 'Kolibri',
          percent: 1
        },
        {
          answer: 'Mandarinente',
          percent: 1
        },
        {
          answer: 'Papagei',
          percent: 40
        },
        {
          answer: 'Paradiesvogel',
          percent: 1
        },
        {
          answer: 'Pfau',
          percent: 19
        },
      ]
    },
    {
      question: 'Nenne einen beliebten Kosenamen',
      options: [
        {
          answer: 'Atömchen',
          percent: 1
        },
        {
          answer: 'Baby',
          percent: 1
        },
        {
          answer: 'Bärchen',
          percent: 4
        },
        {
          answer: 'Hasi',
          percent: 2
        },
        {
          answer: 'Honey',
          percent: 1
        },
        {
          answer: 'Käfer',
          percent: 1
        },
        {
          answer: 'Kätzchen',
          percent: 1
        },
        {
          answer: 'Liebling',
          percent: 1
        },
        {
          answer: 'Mäuschen',
          percent: 8
        },
        {
          answer: 'Milusba',
          percent: 1
        },
        {
          answer: 'Pupsik',
          percent: 1
        },
        {
          answer: 'Schatz / Schätzchen',
          percent: 30
        },
        {
          answer: 'Schoptze',
          percent: 3
        },
        {
          answer: 'Schnuki',
          percent: 1
        },
        {
          answer: 'Süße',
          percent: 1
        },
        {
          answer: 'Spatzi',
          percent: 5
        },
        {
          answer: 'Spotz',
          percent: 1
        },
        {
          answer: 'Tiger',
          percent: 1
        },
        {
          answer: 'Tuschi',
          percent: 1
        },
        {
          answer: 'Zuckerschnäutzchen',
          percent: 1
        },
      ]
    },
    {
      question: 'Nenne eine häufig vorkommende Autofarbe',
      options: [
        {
          answer: 'Blau',
          percent: 3
        },
        {
          answer: 'Grau',
          percent: 2
        },
        {
          answer: 'Rot',
          percent: 2
        },
        {
          answer: 'Schwarz',
          percent: 40
        },
        {
          answer: 'Silber',
          percent: 15
        },
        {
          answer: 'Weiß',
          percent: 8
        },
      ]
    }
  ];

  constructor() { }

  getQuestions() {
    return this.questions;
  }

  getPlayers() {
    return this.players;
  }

}
