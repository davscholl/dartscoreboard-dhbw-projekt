import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private apirequestservice: ApiRequestService,
    public router: Router
    ) { }


  login(f: NgForm): void {
    const param = f.value;
    f.resetForm();
    if (this.apirequestservice.postLogin(param)) {
      this.router.navigate(['create']);
    }
    }

}
