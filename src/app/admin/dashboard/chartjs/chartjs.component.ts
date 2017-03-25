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

    categoryList

    listEventos: any;

    lineChartData: any;

    isDataAvailable: boolean = false;

    monthNames: any;

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

        this.initializeLineChart();

    }

    ngOnInit() {

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

    defineDataset(eventos, list) {
        this.lineChartLabelsNumber.forEach(monthNumber => {
            var group = _.filter(eventos, (evento) => { return new Date(evento.start_date).getMonth() == monthNumber });
            list.push(group.length);
        });
    }

    unlockGraph(unlock: boolean = false) {
        this.isDataAvailable = unlock;
    }

    addDataset(label, eventos, selectList) {
        let list = selectList();
        this.defineDataset(eventos, list);

        this.lineChartData.push({
            data: list,
            fill: false,
            label: "Eventos - " + this._capitalizeFirstLetter(label)
        });

    }

    initializeLineChart() {

        this.eventosService.filterEvento({})
            .subscribe(eventos => {
                this.defineLabels(eventos);
            });

        this.categoryList.forEach((category, idx) => {
            this.eventosService.filterEvento({ category: category.toLowerCase() })
                .subscribe(eventos => {
                    this.addDataset(category, eventos, () => {
                        switch (category) {
                            case "music":
                                return this.listAmountMusic;
                            case "show":
                                return this.listAmountShow;
                            case "party":
                                return this.listAmountParty;
                        }
                    });

                });
            if (idx == this.categoryList.length - 1){
                setTimeout(() => {
                    this.unlockGraph(true);
                }, 4000);
            }
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


    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(57,204,204,0.5)',
            borderColor: '#39cccc',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(0,166,90,0.5)',
            borderColor: '#00a65a',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(221,75,57,0.5)',
            borderColor: '#dd4b39',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];

    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // public randomize(): void {
    //     let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    //     for (let i = 0; i < this.lineChartData.length; i++) {
    //         _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
    //         for (let j = 0; j < this.lineChartData[i].data.length; j++) {
    //             _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    //         }
    //     }
    //     this.lineChartData = _lineChartData;
    // }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

}
