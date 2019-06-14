import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private http:HttpClient,
    public router: Router
    ) { }


  register(rf: NgForm): void {
    const param = rf.value;
    this.http.post('/api/register', param)
      .subscribe(
        (val) => {
          rf.resetForm();
          this.router.navigate(['/']);
        },
        response => {
          console.log('POST call in error', response);
        },
        () => {
        });
    }

}
