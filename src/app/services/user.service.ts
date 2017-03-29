import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private host: string;

  constructor(private http: Http) {
    // this.host = 'https://evento-portal-backend.herokuapp.com'
    this.host = 'http://localhost:3000'
  }

  authenticate(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.host + '/api/users/login', JSON.stringify(user), { headers: headers })
      .map(res => res.json());
  }

}
