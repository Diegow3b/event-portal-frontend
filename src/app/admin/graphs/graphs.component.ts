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
        this.eventos = new Array();
    }

    ngOnInit() {
        this.getAllEventosAdmin();


    }

    countCategory(category: string) {
        let count: number = 0;
        for (let i = 0; i <= this.eventos.length; i++) {
            if (this.eventos[i] && this.eventos[i].category == category) count++;
        }
        return count;

    }
    getAllEventosAdmin() {
        this.eventosService.getEventos()
            .subscribe(eventos => {
                this.eventos = eventos;
                this.cubes.push(new cubeGraph("Total Eventos", this.eventos.length, 'aqua', 'ion-calendar'));
                this.cubes.push(new cubeGraph("Eventos - Show", this.countCategory('show'), 'teal', 'ion-ios-star-outline'));
                this.cubes.push(new cubeGraph("Eventos - Music", this.countCategory('music'), 'green', 'ion-ios-musical-notes'));
                this.cubes.push(new cubeGraph("Eventos - Party", this.countCategory('party'), 'red', 'ion-ios-people'));
            });
    }

}
