import { ViewChild, Component, ElementRef, OnInit } from '@angular/core';
// import Chart from 'chart.js';
import { EventosService } from '../../../services/eventos.service';
import { Evento } from '../../../../../class/evento';

import * as _ from 'underscore';


@Component({
    selector: 'app-chartjs',
    templateUrl: './chartjs.component.html',
    styleUrls: ['./chartjs.component.css']
})
export class ChartjsComponent implements OnInit {

    eventos: any;

    lineChartLabels: any;
    lineChartLabelsNumber: any;

    listAmountMusic: any;
    listAmountShow: any;
    listAmountParty: any;

    categoryList: any;

    listEventos: any;

    lineChartData: any;

    isDataAvailable: boolean;

    monthNames: any;

    lineChartOptions: any;
    lineChartColors: any;
    lineChartLegend: boolean;
    lineChartType: string;

    constructor(private eventosService: EventosService) {
        this.eventos = {};
        this.lineChartLabels = new Array();
        this.lineChartLabelsNumber = new Array();
        this.listEventos = new Array();

        this.listAmountMusic = new Array();
        this.listAmountShow = new Array();
        this.listAmountParty = new Array();

        this.lineChartData = new Array();

        this.categoryList = ['show', 'music', 'party'];

        this.monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        this.loadBasicConfig();
    }

    ngOnInit() {
        this.initializeLineChart();
    }

    defineLabels(eventos) {
        eventos.forEach(evento => {
            let date = new Date(evento.start_date);
            if (!this.lineChartLabels.includes(this.monthNames[date.getMonth()])) {
                this.lineChartLabels.push(this.monthNames[date.getMonth()]);
                this.lineChartLabelsNumber.push(date.getMonth());
            }

        });
    }

    _capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    unlockGraph(unlock: boolean = false) {
        this.isDataAvailable = unlock;
    }

    getAmountByCategory(category) {
        return new Promise((resolve, reject) => {

            let list = new Array();

            this.eventosService.filterEvento({ category: category.toLowerCase() })
                .subscribe(eventos => {

                    switch (category) {
                        case "music":
                            list = this.listAmountMusic;
                            break;
                        case "show":
                            list = this.listAmountShow;
                            break;
                        case "party":
                            list = this.listAmountParty;
                            break;
                    }

                    for (let i = 0; i < this.lineChartLabelsNumber.length; i++) {
                        var group = _.filter(eventos, (evento) => { return new Date(evento.start_date).getMonth() == this.lineChartLabelsNumber[i] });
                        list.push(group.length);
                    }

                    if (!eventos) reject(new Error('Error'));
                    resolve(list);

                });
        })
    }

    initializeLineChart() {

        this.eventosService.filterEvento({})
            .subscribe(eventos => {
                this.defineLabels(eventos);

                // let promiseStack = new Array();

                // for (let i = 0; i <= this.categoryList.length; i++) {
                //     promiseStack.push(this.getAmountByCategory.bind(this.categoryList[i]))

                // }

                Promise.all(
                    // promiseStack
                    [this.getAmountByCategory('music'),
                    this.getAmountByCategory('show'),
                    this.getAmountByCategory('party')]
                ).then((lists) => {
                    lists.forEach((list, idx) => {
                        this.lineChartData.push({
                            data: list,
                            fill: false,
                            label: "Eventos - " + this._capitalizeFirstLetter(this.categoryList[idx])
                        });
                    });

                    if (lists) this.unlockGraph(true);
                })

            });

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

    loadBasicConfig() {

        this.lineChartOptions = {
            responsive: true
        };

        this.lineChartColors = [
            {
                backgroundColor: 'rgba(57,204,204,0.5)',
                borderColor: '#39cccc',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(0,166,90,0.5)',
                borderColor: '#00a65a',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(221,75,57,0.5)',
                borderColor: '#dd4b39',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];

        this.lineChartLegend = true;
        this.lineChartType = 'line';

    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

}
