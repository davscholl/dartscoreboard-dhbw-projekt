import { Injectable } from '@angular/core';
//import { Socket } from 'ngx-socket-io';
import { Document } from '../modules/document';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');
  const socket = io.connect('http://localhost:3001');

  constructor() { }

  getDocument(id: string) {
    this.socket.emit('getDoc', id);
  }

  newDocument(): string {
    const _ID = this.docId();
    this.socket.emit('addDoc', { id: (_ID), doc: '' , startScoure: 501, playerA: '', playerB: '', sPlayerA: 0, sPlayerB: 0, whosTurn: 'A'});
    return _ID;
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
