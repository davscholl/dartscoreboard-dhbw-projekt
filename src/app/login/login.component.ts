import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private http:HttpClient,
    public router: Router
    ) { }


  login(f: NgForm): void {
    const param = f.value;
    f.resetForm();
    this.http.post('/api/login', param)
      .subscribe(
        (val) => {
            const obj = val;
            let ob: string;
            ob = JSON.stringify(obj);
            localStorage.setItem('_ID', ob);
            this.router.navigate(['create']);
        },
        response => {

            console.log('POST call in error', response);
        },
        () => {
            console.log('The POST observable is now completed.');
        });
    }


}
