import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {

  questions: Array<any> = this.questionsService.getQuestions();
  answersOfPlayer1: any = [];
  loggedAnswersOfPlayer1: any = [];
  animationsOfPlayer1: any = [];
  answersOfPlayer2: any = [];
  loggedAnswersOfPlayer2: any = [];
  animationsOfPlayer2: any = [];
  questionIndex = 0;
  state: object = localStorage;
  player1: string = this.questionsService.getPlayers()[0];
  player2: string = this.questionsService.getPlayers()[1];

  constructor(
    private questionsService: QuestionsService
  ) { }

  ngOnInit() {
    localStorage.clear();

    localStorage.setItem('questionIndex', this.questionIndex.toString());

    window.addEventListener('storage', (event) => {
      this.state = localStorage;
    });
  }

  playerGaveWrongAnswer(answer) {
    if (!answer) { return false; }

    return !this.questions[this.questionIndex].options.find(e => {
      return e.answer === answer;
    });
  }

  notAllowedSound() {
    const audio: any = document.getElementById('notAllowedSound');
    audio.play();
  }

  clear(index) { console.log(index); }

  logAnswerOfPlayer1() {
    this.loggedAnswersOfPlayer1[this.questionIndex] = true;
    localStorage.setItem('answersOfPlayer1', this.answersOfPlayer1);
    const audio: any = document.getElementById('textSound');
    audio.play();
  }

  logPointsOfPlayer1() {
    this.animationsOfPlayer1[this.questionIndex] = true;
    localStorage.setItem('animationsOfPlayer1', this.animationsOfPlayer1);
    if (this.playerGaveWrongAnswer(this.answersOfPlayer1[this.questionIndex])) {
      const audio: any = document.getElementById('failSound');
      audio.play();
    } else {
      const audio: any = document.getElementById('scoreSound');
      audio.play();
    }
  }

  logAnswerOfPlayer2() {
    this.loggedAnswersOfPlayer2[this.questionIndex] = true;
    localStorage.setItem('answersOfPlayer2', this.answersOfPlayer2);
    const audio: any = document.getElementById('textSound');
    audio.play();
  }

  logPointsOfPlayer2() {
    this.animationsOfPlayer2[this.questionIndex] = true;
    localStorage.setItem('animationsOfPlayer2', this.animationsOfPlayer2);

    if (this.playerGaveWrongAnswer(this.answersOfPlayer2[this.questionIndex])) {
      const audio: any = document.getElementById('failSound');
      audio.play();
    } else {
      const audio: any = document.getElementById('scoreSound');
      audio.play();
    }
  }

  nextQuestion() {
    if(this.questionIndex < this.questions.length-1) {
      this.questionIndex++;
      localStorage.setItem('questionIndex', this.questionIndex.toString());
    }
  }

  questionBefore() {
    if(this.questionIndex > 0) {
    this.questionIndex--;
    localStorage.setItem('questionIndex', this.questionIndex.toString());
    }
  }
}
