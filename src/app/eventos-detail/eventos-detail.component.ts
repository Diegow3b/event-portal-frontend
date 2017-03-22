import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../services/eventos.service';
import { Evento } from '../../../class/evento';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-eventos-detail',
    templateUrl: './eventos-detail.component.html',
    styleUrls: ['./eventos-detail.component.css']
})
export class EventosDetailComponent implements OnInit, OnDestroy {

    evento: Evento;

    defaultImage: string;

    _id: string;
    private sub: any;

    constructor(private eventosService: EventosService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {
        this.defaultImage = '../../src/static/admin/img/mean.jpeg';
    }

    sanitizeSafeStyle(url: string) {
        if (url) {
            return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
        } else {
            return null;
        }
    }

    getEvento(_id: string) {
        if(!_id) return;
        this.eventosService.filterEvento({ _id: _id })
            .subscribe(evento => {
                if (!evento.imagem) delete evento.imagem;
                if (evento.length == 1) this.evento = evento[0];
            });

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this._id = params['id'];

            this.getEvento(this._id);

        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

