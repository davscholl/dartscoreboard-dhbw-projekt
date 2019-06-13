import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http:HttpClient) { }


  login(f: NgForm): void {
    const param = f.value;
    this.http.post('/api/login', param)
      .subscribe(
        (val) => {
            console.log('POST call successful value returned in body',
                        val);
        },
        response => {

            console.log('POST call in error', response);
        },
        () => {
            console.log('The POST observable is now completed.');
        });
    }


}
