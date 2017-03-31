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

    getUsers() {
        return this.http.get(this.host + '/api/users')
            .map(res => res.json());
    }

    filterUsers(filterObj) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + '/api/users/filter', JSON.stringify(filterObj), { headers: headers })
            .map(res => res.json());
    }

    addUser(newUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + '/api/users', JSON.stringify(newUser), { headers: headers })
            .map(res => res.json());
    }

    deleteUser(id) {
        return this.http.delete(this.host + '/api/users/' + id)
            .map(res => res.json());
    }

    updateUser(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.host + '/api/users/' + user._id, JSON.stringify(user), { headers: headers })
            .map(res => res.json());
    }

}
