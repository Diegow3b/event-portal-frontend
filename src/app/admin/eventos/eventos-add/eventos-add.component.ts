import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-eventos-add',
    templateUrl: './eventos-add.component.html',
    styleUrls: ['./eventos-add.component.css']
})
export class EventosAddComponent implements OnInit {

    title: string;
    location: string;
    city: string;
    slug: string;
    description: string;
    imagem: string;
    category: string;
    start_date: any;
    end_date: any;
    producer: string;

    datepickerOpts: any;
    timepickerOpts: any;

    constructor(private eventosService: EventosService, private router: Router) {
    }

    ngOnInit() {
    }

    addEvento(event) {
        event.preventDefault();
        var newEvento = {
            title: this.title,
            location: this.location,
            city: this.city,
            start_date: new Date(this.start_date),
            end_date: new Date(this.end_date),
            slug: this.slug,
            description: this.description,
            imagem: this.imagem,
            category: this.category,
            producer: this.producer
        }

        this.eventosService.addEvento(newEvento)
            .subscribe(evento => {
                this.router.navigate(['events']);
            });

    }

}
