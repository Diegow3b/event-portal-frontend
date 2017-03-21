import { Component, Input, OnInit } from '@angular/core';
import { cubeGraph } from '../../../../class/cube';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../../../class/evento';

@Component({
    selector: 'app-graphs',
    templateUrl: './graphs.component.html',
    styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

    eventos: Evento[];
    cubes: cubeGraph[];

    amountEventos: number;

    constructor(private eventosService: EventosService) {
        this.cubes = new Array();
    }

    ngOnInit() {
        this.getAllEventosAdmin();
        this.cubes.push(new cubeGraph("Eventos", this.amountEventos, 'aqua', 'ion-calendar'));
        this.cubes.push(new cubeGraph("Users", 75, 'yellow', 'ion-person-stalker'));
    }

    getAllEventosAdmin() {
        this.eventosService.getEventos()
            .subscribe(eventos => {
                this.eventos = eventos;
                this.amountEventos = eventos.length;
            });
    }

}
