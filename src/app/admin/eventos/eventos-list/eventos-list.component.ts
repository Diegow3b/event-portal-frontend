import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { Evento } from '../../../../../class/evento';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit {

    eventos: Evento[];
    eventosAmount: number;

    constructor(private eventosService: EventosService) {
        this.eventos = new Array();
    }

    ngOnInit() {
        this.getAllEventos();
    }

    _sortByDate(path = [], order = "asc", comparator = (a: any, b: any, order: string) => {
        switch (order) {
            case "asc":
                return new Date(a).getTime() - new Date(b).getTime();

            case "desc":
                return new Date(a).getTime() + new Date(b).getTime();
        }
    }) {
        return (a, b) => {
            let _a = a
            let _b = b
            for (let key of path) {
                _a = _a[key]
                _b = _b[key]
            }
            return comparator(_a, _b, order)

        }
    }

    getAllEventos() {
        this.eventosService.getEventos()
            .subscribe(eventos => {
                this.eventos = eventos.sort(this._sortByDate(['start_date']));
                this.eventosAmount = eventos.length;
            });
    }

}
