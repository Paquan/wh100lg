import { Component, OnInit } from '@angular/core';
import { QuestionsService } from "../shared/questions.service";


@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  state: any = localStorage;
  questions: Array<any> = this.questionsService.getQuestions();
  answersOfPlayer1: Array<string> = [];
  answersOfPlayer2: Array<string> = [];
  animationsOfPlayer1: Array<boolean> = [];
  animationsOfPlayer2: Array<boolean> = [];
  questionIndex: number = 0;
  player1: string = this.questionsService.getPlayers()[0];
  player2: string = this.questionsService.getPlayers()[1];
  scoreOfPlayer1: number = 0;
  scoreOfPlayer2: number = 0;
  percentOfPlayer1: number;
  percentOfPlayer2: number;

  constructor(
    private questionsService: QuestionsService
  ) { }

  ngOnInit() {

    window.addEventListener('storage', (event) => {
      this.state = localStorage;

      if(this.state.answersOfPlayer1) {
        this.answersOfPlayer1 = this.state.answersOfPlayer1.split(',');
        let x = 0;
        this.questions[this.questionIndex].options.forEach(e => {
          if (e.answer === this.answersOfPlayer1[this.questionIndex]) {
            x = e.percent;
          }
        });
        this.percentOfPlayer1 = x;
      }

      if(this.state.answersOfPlayer2) {
        this.answersOfPlayer2 = this.state.answersOfPlayer2.split(',');

        let x = 0;
        this.questions[this.questionIndex].options.forEach(e => {
          if (e.answer === this.answersOfPlayer2[this.questionIndex]) {
            x = e.percent;
          }
        });
        this.percentOfPlayer2 = x;
      }

      if(this.state.animationsOfPlayer1) {
        this.state.animationsOfPlayer1.split(',')
          .forEach((element, index) => {
            if (element === "true") this.animationsOfPlayer1[index] = true;
            if (element === "false") this.animationsOfPlayer1[index] = false;
          });

          if(this.animationsOfPlayer1[this.questionIndex]) {
            this.scoreOfPlayer1 = 0;
            this.answersOfPlayer1.forEach((element, index) => {
              this.questions[index].options.forEach(e => {
                if (element === e.answer) this.scoreOfPlayer1 += e.percent;
              });
            });
          }

      }

      if(this.state.animationsOfPlayer2) {
        this.state.animationsOfPlayer2.split(',')
          .forEach((element, index) => {
            if (element === "true") this.animationsOfPlayer2[index] = true;
            if (element === "false") this.animationsOfPlayer2[index] = false;
          });

          if(this.animationsOfPlayer2[this.questionIndex]) {
            this.scoreOfPlayer2 = 0;
            this.answersOfPlayer2.forEach((element, index) => {
              this.questions[index].options.forEach(e => {
                if (element === e.answer) this.scoreOfPlayer2 += e.percent;
              });
            });
          }

      }

      this.questionIndex = parseInt(localStorage.questionIndex);
    })
  }

  playerGaveWrongAnswer(answer) {
    if (!answer) return false;

    return !this.questions[this.questionIndex].options.find(e => {
      return e.answer === answer;
    });
  }
}
