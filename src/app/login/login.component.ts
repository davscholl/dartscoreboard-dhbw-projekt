import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiRequestService } from '../services/api-request.service';
import { HttpClient } from '@angular/common/http';
//import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //username: Observable<any[]>;
  constructor(
    private apirequestservice: ApiRequestService,
    public router: Router,
    private http:HttpClient
    ) { }


  login(f: NgForm): void {
    const param = f.value;
    f.resetForm();
    if (this.apirequestservice.postLogin(param)) {
      this.router.navigate(['join']);
    }
      }

}



