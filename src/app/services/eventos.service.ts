import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventosService {

  constructor(private http: Http) {
    console.log('Evento Service Initialized...');
  }

  getEventos() {
      return this.http.get('http://localhost:3000/api/eventos')
          .map(res => res.json());
  }

  filterEvento(filterObj){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      console.log(filterObj);
      return this.http.post('http://localhost:3000/api/eventos/filter', JSON.stringify(filterObj), { headers: headers })
          .map(res => res.json());
  }

  addEvento(newEvento) {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/api/eventos', JSON.stringify(newEvento), { headers: headers })
          .map(res => res.json());
  }

  deleteEvento(id){
      return this.http.delete('http://localhost:3000/api/eventos/' + id)
          .map(res => res.json());
  }

  updateEvento(evento){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.put('http://localhost:3000/api/eventos/'+evento._id, JSON.stringify(evento), { headers: headers })
          .map(res => res.json());
  }

}
