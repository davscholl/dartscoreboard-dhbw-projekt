import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(
    private http:HttpClient
    ) { }

  postLogin(params: any): boolean {
    this.http.post('/api/login', params)
      .subscribe(
        (val) => {
            const obj = val;
            let ob: string;
            ob = JSON.stringify(obj);
            localStorage.setItem('_ID', ob);
            localStorage.setItem('login', 'true');
            return true;
        },
        response => {
            return false;
        },
        () => {
            return true;
        });
    return true;
  }
}
