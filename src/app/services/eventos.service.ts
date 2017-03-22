import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventosService {

    private host: string;
    process: any;

    constructor(private http: Http) {
        console.log('Evento Service Initialized...');
        // this.host =  process.env.NODE_ENV == 'production' ? 'https://evento-portal-backend.herokuapp.com':'http://localhost:3000';
        this.host = 'https://evento-portal-backend.herokuapp.com'
        // this.host = 'http://localhost:3000'
    }

    getEventos() {
        return this.http.get(this.host+'/api/eventos')
            .map(res => res.json());
    }

    filterEvento(filterObj) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host+'/api/eventos/filter', JSON.stringify(filterObj), { headers: headers })
            .map(res => res.json());
    }

    addEvento(newEvento) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host+'/api/eventos', JSON.stringify(newEvento), { headers: headers })
            .map(res => res.json());
    }

    deleteEvento(id) {
        return this.http.delete(this.host+'/api/eventos/' + id)
            .map(res => res.json());
    }

    updateEvento(evento) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.host+'/api/eventos/' + evento._id, JSON.stringify(evento), { headers: headers })
            .map(res => res.json());
    }

}
