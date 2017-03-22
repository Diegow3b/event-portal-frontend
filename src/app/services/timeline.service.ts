import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TimelineService {

    private host: string;
    process: any;

    constructor(private http: Http) {
        console.log('Timeline Service Initialized...');
        // this.host =  process.env.NODE_ENV == 'production' ? 'https://Timeline-portal-backend.herokuapp.com':'http://localhost:3000';
        this.host = 'https://Timeline-portal-backend.herokuapp.com'
        // this.host = 'http://localhost:3000'
    }

    getTimeline() {
        return this.http.get(this.host+'/api/timeline')
            .map(res => res.json());
    }

    addTimeline(newTimeline) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host+'/api/timeline', JSON.stringify(newTimeline), { headers: headers })
            .map(res => res.json());
    }

}
