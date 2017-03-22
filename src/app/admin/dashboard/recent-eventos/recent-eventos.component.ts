import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { Evento } from '../../../../../class/evento';

@Component({
    selector: 'app-recent-eventos',
    templateUrl: './recent-eventos.component.html',
    styleUrls: ['./recent-eventos.component.css']
})
export class RecentEventosComponent implements OnInit {

    eventos: Evento[];

    constructor(private eventosService: EventosService) {
        this.eventos = new Array;
     }

    ngOnInit() {
        this.getAllEventosAdmin();
    }

     getAllEventosAdmin() {
        this.eventosService.getEventos()
            .subscribe(eventos => {
                this.eventos = eventos.slice(0, 5);
            });
    }
}
