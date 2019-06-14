import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Document } from '../modules/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');

  constructor(private socket: Socket) { }

  getDocument(id: string) {
    this.socket.emit('getDoc', id);
  }

  newDocument(): string {
    const _ID = this.docId();
    const id = JSON.stringify(_ID);
    this.socket.emit('addDoc', { id: (id), doc: '' , startScoure: 501});
    return id;
  }

  editDocument(document: Document) {
    this.socket.emit('editDoc', document);
  }

  private docId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }


    return text;
  }
}
