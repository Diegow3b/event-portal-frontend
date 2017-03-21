import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from '../../../../../class/evento';

@Component({
    selector: 'app-eventos-edit',
    templateUrl: './eventos-edit.component.html',
    styleUrls: ['./eventos-edit.component.css']
})
export class EventosEditComponent implements OnInit, OnDestroy {

    evento: Evento;

    private sub: any;

    constructor(private eventosService: EventosService, private router: Router, private route: ActivatedRoute) {
        this.evento = new Evento();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.evento._id = params['id'];

            this.getEvento(this.evento._id);
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    getEvento(_id: string) {
        if(!_id) return;
        this.eventosService.filterEvento({ _id: _id })
            .subscribe(evento => {
                if (!evento.imagem) delete evento.imagem;
                evento.start_date = new Date(evento.start_date);
                evento.end_date =  new Date(evento.end_date);
                if (evento.length == 1) this.evento = evento[0];
            });
    }

    updateEvento(event) {
        event.preventDefault();
        let _evento = {
            _id: this.evento._id,
            title: this.evento.title,
            location: this.evento.location,
            city: this.evento.city,
            start_date: new Date(this.evento.start_date),
            end_date: new Date(this.evento.end_date),
            slug: this.evento.slug,
            description: this.evento.description,
            imagem: this.evento.imagem,
            category: this.evento.category,
            producer: this.evento.producer
        };

        this.eventosService.updateEvento(_evento)
            .subscribe(data => {
                // TO DO Mostrar Mensagem de Alteração com Sucesso
                this.router.navigate(['admin/events']);
            })
    }

}
