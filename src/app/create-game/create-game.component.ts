import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Subscription } from 'rxjs';
import { Document } from 'src/app/modules/document';
import { Router } from '@angular/router';
import { startWith } from 'rxjs/operators';


export interface Scoure {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit, OnDestroy {

  selectedValue = 501;
  players: object;

  scoure: Scoure[] = [
    {value: 301, viewValue: '301'},
    {value: 501, viewValue: '501'},
    {value: 701, viewValue: '701'}
  ];

  document: Document;
  private docsub: Subscription;
  private docSub: Subscription;
  gameID = 'None';
  constructor(
    private documentService: DocumentService,
    private router: Router
    ) { }

    //neues leeres dukoment, dummy
  ngOnInit() {
      this.docSub = this.documentService.currentDocument.pipe(
      startWith({  id: '', doc: '' , startScoure: 501 , playerA: '', playerB: '', sPlayerA: 501, sPlayerB: 501, whosTurn: ''})
      ).subscribe(document => this.document = document);
      this.newGame();
  }

  ngOnDestroy() {
    this.docSub.unsubscribe();
  }

  //erstellen neues dukoment
  newGame(): void {
    this.gameID = this.documentService.newDocument();
    localStorage.setItem('gameID', this.gameID);
    this.docsub = this.documentService.currentDocument.subscribe(doc => this.gameID = doc.id);
    this.documentService.getDocument(localStorage.getItem('gameID'));
    }

  start(): void {
    localStorage.setItem('player', 'A');
    this.document.sPlayerA = this.document.startScoure;
    this.document.sPlayerB = this.document.startScoure;
    this.documentService.editDocument(this.document);
    console.log(this.document);
    this.router.navigate(['game']);
  }


  /* local(): void{
    console.log(localStorage.getItem('_ID'));
  } */

}
