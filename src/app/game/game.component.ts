import { Component, OnInit, OnDestroy, OnChanges} from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Subscription } from 'rxjs';
import { Document } from 'src/app/modules/document';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy, OnChanges {

  playerA: string;
  playerB: string;
  scoureA: Array<number> = [];
  scoureB: Array<number> = [];
  startScoure: number;
  document: Document;
  player: string;
  firstDart: number;
  secondDart: number;
  thirdDart: number;

  private docSub: Subscription;
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.docSub = this.documentService.currentDocument.pipe(
      startWith({  id: '', doc: '' , startScoure: 0 , playerA: '', playerB: '', sPlayerA: 501, sPlayerB: 501, whosTurn: ''})
      ).subscribe(document => this.document = document);
    this.documentService.getDocument(localStorage.getItem('gameID'));
    console.log(this.document);
    this.player = localStorage.getItem('player');
    this.start();
  }

  ngOnDestroy() {
    localStorage.removeItem('gameID');
    this.docSub.unsubscribe();
  }

  ngOnChanges() {

  }


  start(): void {
    this.player = localStorage.getItem('player');
    this.playerA = this.document.playerA;
    this.playerB = this.document.playerB;
    this.scoureA.push(this.document.sPlayerA);
    this.scoureB.push(this.document.sPlayerB);
    this.documentService.editDocument(this.document);
    console.log(this.scoureA);
  }

  trow(): void {
    if (this.player === 'A') {
      let temp: number;
      temp = this.scoureA.pop();
      this.scoureA.push(temp);
      let tem: number;
      tem = temp - this.firstDart;
      if (tem > 1) {
        temp = temp - this.firstDart;
        tem = temp - this.secondDart;
      }
      if ( tem > 1) {
        temp = temp - this.secondDart;
        tem = temp - this.thirdDart ;
      }
      if (tem > 1) {
        temp = temp - this.thirdDart;
      }
      this.document.sPlayerA = temp;
      this.scoureA.push(temp);
      this.scoureB.push(this.document.sPlayerB);
      this.documentService.editDocument(this.document);
      console.log(this.document);
      localStorage.setItem('score', this.document.sPlayerA.toString());
      localStorage.setItem('scoreB', this.document.sPlayerB.toString());
    }

    if (this.player === 'B') {
      let temp: number;
      temp = this.scoureB.pop();
      this.scoureB.push(temp);
      let tem: number;
      tem = temp - this.firstDart;
      if (tem > 1) {
        temp = temp - this.firstDart;
        tem = temp - this.secondDart;
      }
      if ( tem > 1) {
        temp = temp - this.secondDart;
        tem = temp - this.thirdDart ;
      }
      if (tem > 1) {
        temp = temp - this.thirdDart;
      }
      this.document.sPlayerB = temp;
      this.scoureB.push(temp);
      this.scoureA.push(this.document.sPlayerA);
      this.documentService.editDocument(this.document);
      localStorage.setItem('scoreA', this.document.sPlayerA.toString());
      localStorage.setItem('scoreB', this.document.sPlayerB.toString());
      console.log(this.document);
    }

  }

}
