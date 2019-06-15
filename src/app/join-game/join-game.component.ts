import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {

  currentDocId: string;
  private docsub: Subscription;
  gameID: string;

  constructor(
    private documentService: DocumentService,
    public router: Router
    ) { }

  ngOnInit() {
    this.docsub = this.documentService.currentDocument.subscribe(doc => this.currentDocId = doc.id);
  }

  join() {
    this.documentService.getDocument(this.gameID);
    localStorage.setItem('gameID', this.gameID);
    localStorage.setItem('player', 'B');
    this.router.navigate(['game']);
  }

}
