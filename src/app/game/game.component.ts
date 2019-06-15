import { Component, OnInit, OnDestroy  } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Subscription } from 'rxjs';
import { Document } from 'src/app/modules/document';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

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

  private docsub: Subscription;
  private docSub: Subscription;
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.getDocument(localStorage.getItem('gameID'));
    this.docSub = this.documentService.currentDocument.subscribe(document => this.document = document);
    console.log(this.document);
    this.player = localStorage.getItem('player');
  }

  count(): void {
    this.player = localStorage.getItem('player');
    this.playerA = this.document.playerA;
    this.playerB = this.document.playerB;
    this.scoureA.push(this.document.sPlayerA);
    this.scoureB.push(this.document.sPlayerB);
    this.documentService.editDocument(this.document);
    console.log(this.scoureA);
  }

  ngOnDestroy() {
    localStorage.removeItem('gameID');
    this.docSub.unsubscribe();
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
      this.documentService.editDocument(this.document);
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
      this.documentService.editDocument(this.document);
    }

  }

}
