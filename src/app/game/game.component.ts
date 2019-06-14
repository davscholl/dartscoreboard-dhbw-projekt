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

  document: Document;
  private docsub: Subscription;
  private docSub: Subscription;
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.getDocument(localStorage.getItem('gameID'));
    this.docSub = this.documentService.currentDocument.subscribe(document => this.document = document);
  }

  count(): void {
    this.documentService.editDocument(this.document);
  }

  ngOnDestroy() {
    localStorage.removeItem('gameID');
    this.docSub.unsubscribe();
  }


}
