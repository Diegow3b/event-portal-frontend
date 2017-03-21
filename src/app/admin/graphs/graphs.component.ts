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

        this.cubes.push(new cubeGraph("Users", 0, 'yellow', 'ion-person-stalker'));
        this.cubes.push(new cubeGraph("Eventos - Show", 0, 'teal', 'ion-ios-star-outline'));
        this.cubes.push(new cubeGraph("Eventos - Music", 0, 'green', 'ion-ios-musical-notes'));
        this.cubes.push(new cubeGraph("Eventos - Party", 0, 'red', 'ion-ios-people'));
    }

    getAllEventosAdmin() {
        this.eventosService.getEventos()
            .subscribe(eventos => {
                this.eventos = eventos;
                this.cubes.push(new cubeGraph("Total Eventos", this.eventos.length, 'aqua', 'ion-calendar'));
            });
    }

}
