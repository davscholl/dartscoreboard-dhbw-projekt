import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Subscription } from 'rxjs';
import { Document } from 'src/app/modules/document';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  document: Document;
  private docSub: Subscription;
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.docSub = this.documentService.currentDocument.pipe(
      startWith({ id: '', doc: 'Select an existing document or create a new one to get started', startScoure: 501})
    ).subscribe(document => this.document = document);
  }

  count(): void {
    this.document.startScoure++;
    this.documentService.editDocument(this.document);
  }


}
