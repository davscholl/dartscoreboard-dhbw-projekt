import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  private docsub: Subscription;
  gameID: string;
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.docsub = this.documentService.currentDocument.subscribe(doc => this.gameID = doc.id);
  }

  newGame() {
    this.gameID = this.documentService.newDocument();
  }

  /* local(): void{
    console.log(localStorage.getItem('_ID'));
  } */

}
