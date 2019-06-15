import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  joinGame(): void {
    if (localStorage.getItem('login') === 'true') {
      this.router.navigate(['join']);
    }
  }
  createGame(): void {
    if (localStorage.getItem('login') === 'true') {
      this.router.navigate(['create']);
    }
  }

  stats(): void {
    if (localStorage.getItem('login') === 'true') {
      this.router.navigate(['stats']);
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
