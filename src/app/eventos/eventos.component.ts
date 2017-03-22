import { Component, ViewChild, ElementRef, OnInit, Pipe, PipeTransform } from '@angular/core';
import { EventosService } from '../services/eventos.service';
import { Evento } from '../../../class/evento';

import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'app-eventos',
    templateUrl: './eventos.component.html',
    styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

    eventos: Evento[];
    eventosAmount: number;

    _id: string;
    title: string;
    location: string;
    city: string;
    start_date: any = new Date();
    end_date: any = new Date();
    slug: string;
    description: string;
    imagem: string;
    category: string;

    dateFilter: string;
    cityFilter: string;
    categoryFilter: string;

    dateFilterLabel: string;

    locationEventFilter: string;

    defaultImage: string;

    constructor(private eventosService: EventosService, private sanitizer: DomSanitizer) {

        this.getAllEventos();

        this.defaultImage = '../../src/static/admin/img/mean.jpeg';
        this.locationEventFilter = "All";
        this.dateFilterLabel = "All Dates"
    }

    sanitizeSafeStyle(url: string) {
        if (url) {
            return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
        } else {
            return null;
        }
    }

    _sortByDate ( path = [], order = "asc" , comparator = (a: any, b: any, order:string) => {
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
                for(let key of path) {
                    _a = _a[key]
                    _b = _b[key]
                }
                return comparator(_a, _b, order)

            }
    }


    _updateListByDates(listDates: Array<any>, startDay: number, endDay: number, day:number, date:any){
        let i = 0;

        while (day <= 6) {
            day = date.getDay() + i;
            if (day === startDay || day === endDay) {
                date.setDate(date.getDate() + day);
                listDates.push(new Date(date.valueOf()));
            }
            i++;
        }

        return listDates;
    }

    convertDateFilter(dateString: string) {
        let listDate = [];

        let date = new Date();
        let day = date.getDay();

        if (dateString) {
            dateString = dateString.toLowerCase(); // Sanity Check
        }

        switch (dateString) {
            case "today":
                listDate.push(date);
                break;
            case "tomorrow":
                date.setDate(date.getDate() + 1);
                listDate.push(new Date(date.valueOf()));
                break;
            case "this-week":
                /**
                 * Day 1 = Monday
                 * Day 5 = Friday
                 */
                day = 0; // Reseting the Week
                listDate = this._updateListByDates(listDate, 1, 5, day, date)
                break;
            case "this-weekend":
                /** Brazil format (Saturday and Sunday is Weekend)
                 * Day 0 = Sunday
                 * Day 6 = Saturday
                 */
                listDate = this._updateListByDates(listDate, 0, 6, day, date)
                break;
            case "next-week":
                day = 0;
                date.setDate(date.getDate() +7);
                listDate = this._updateListByDates(listDate, 1, 5, day, date)
                break;
            case "this-month":
                /**
                 * Getting the first and last day of month
                 */
                var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
                var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                listDate.push(firstDay, lastDay);
                break;
        }

        return listDate;
    }

    _sanityCheck(filter){
        if (!filter.category) delete filter.category;
        if (!filter.city) delete filter.city;
        if (filter.date.length === 0) delete filter.date;
        return filter
    }

    filterEvents() {
        event.preventDefault();
        let dateString = this.dateFilter;
        var filter = {
            category: this.categoryFilter,
            city: this.cityFilter,
            date: this.convertDateFilter(dateString)
        }

        this._sanityCheck(filter);

        this.eventosService.filterEvento(filter)
            .subscribe(eventos => {
                this.eventos = eventos.sort(this._sortByDate([ 'start_date' ]));
                if (eventos) this.eventosAmount = eventos.length;
                if (this.cityFilter) this.locationEventFilter = this.cityFilter;
            });

    }

    _DateSelectonChange(value){
        switch(value) {
            case "date":
                this.eventos = this.eventos.sort(this._sortByDate([ 'start_date' ]));
                break;
            case "relevance":
                this.eventos = this.eventos.sort(this._sortByDate([ 'start_date' ], "desc"));
                break;
        }
    }

    setDateFilter(event) {
        this.dateFilter = event.target.attributes[1].value
        this.dateFilterLabel = event.target.innerHTML;
    }

    limparForm() {
        this.title = '';
        this.location = '';
        this.start_date = '';
        this.end_date = '';
        this.slug = '';
        this.description = '';
        this.category = '';
    }

    getAllEventos() {
        this.eventosService.getEventos()
            .subscribe(eventos => {
                this.eventos = eventos.sort(this._sortByDate([ 'start_date' ]));
                this.eventosAmount = eventos.length;
            });
    }

    addEvento(event) {
        event.preventDefault();
        var newEvento = {
            title: this.title,
            location: this.location,
            city: this.city,
            start_date: this.start_date, /**add as Date */
            end_date: this.end_date, /**add as Date */
            slug: this.slug,
            description: this.description,
            imagem: this.imagem,
            category: this.category
        }

        this.eventosService.addEvento(newEvento)
            .subscribe(evento => {
                this.eventos.push(evento);
                this.limparForm();
            });

    }

    deleteEvento(id) {
        var eventos = this.eventos;

        this.eventosService.deleteEvento(id).subscribe(data => {
            for (var i = 0; i < eventos.length; i++) {
                if (eventos[i]._id == id) {
                    eventos.splice(i, 1);
                }
            }
        });
    }

    updateEvento() {
        let _evento = {
            _id: this._id,
            title: this.title,
            location: this.location,
            city: this.city,
            start_date: this.start_date,
            end_date: this.end_date,
            slug: this.slug,
            description: this.description,
            imagem: this.imagem,
            category: this.category
        };
        this.eventosService.updateEvento(_evento)
            .subscribe(data => {
                // TO DO Mostrar Mensagem de Alteração com Sucesso
                var eventos = this.eventos;

                for (var i = 0; i < eventos.length; i++) {
                    if (eventos[i]._id.toString() == _evento._id) eventos[i].title = _evento.title
                }
                this.limparForm();
            })
    }

    DOMloadEditEvento(evento) {
        this._id = evento._id;
        this.title = evento.title;
        this.location = evento.location;
        this.city = evento.city;
        this.start_date = evento.start_date; /**add as Date */
        this.end_date = evento.end_date; /**add as Date */
        this.description = evento.description;
        this.category = evento.category;
    }

    ngOnInit() {
        // let categoryObservable = Observable.fromEvent(this.input_category.nativeElement, 'keyup');
        // let cityObservable = Observable.fromEvent(this.input_city.nativeElement, 'keyup');

        // categoryObservable.subscribe();
        // cityObservable.subscribe();
    }

}

// @Pipe({
//   name: 'searchPipe',
//   pure: false
// })
// export class SearchPipe implements PipeTransform {
//   transform(eventos: Evento[], searchKeys: any): any[] {
//       let category = searchKeys.category.toLowerCase();
//       let city = searchKeys.city.toLowerCase();

//       if (!eventos) return

//       return eventos.filter(item => {
//           return item.category.toLowerCase() == category &&
//                  item.city.toLowerCase() == city;
//       });
//   }
// }
