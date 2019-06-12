import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Subscription } from 'rxjs';
import { Document } from 'src/app/modules/document';
import { startWith } from 'rxjs/operators';


@Component({
  selector: 'app-chating',
  templateUrl: './chating.component.html',
  styleUrls: ['./chating.component.css']
})

export class ChatingComponent implements OnInit, OnDestroy {

  document: Document;
  private docSub: Subscription;
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.docSub = this.documentService.currentDocument.pipe(
      startWith({ id: '', doc: 'Select an existing document or create a new one to get started'})
    ).subscribe(document => this.document = document);
  }

  ngOnDestroy() {
    this.docSub.unsubscribe();
  }

  editDoc() {
    this.documentService.editDocument(this.document);
  }

}
