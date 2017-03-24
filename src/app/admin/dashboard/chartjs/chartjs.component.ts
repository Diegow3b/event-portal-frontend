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

    // @ViewChild('line') line: ElementRef;

    eventos: any;

    lineChartLabels: any;
    lineChartLabelsNumber: any;

    listEventos: any;

    constructor(private eventosService: EventosService) {
        this.eventos = {};
        this.lineChartLabels = new Array();
        this.lineChartLabelsNumber = new Array();
        this.listEventos = new Array();

    }

    ngOnInit() {
        this.initializeLineChart();
    }

    // getEventoByLabel() {
    //     this.eventosService.filterEvento({ category: "music" })
    //         .subscribe(eventos => {
    //             var groups: any;
    //             this.eventos.music = eventos.sort(this._sortByDate(['start_date']));

    //             eventos.forEach(element => {
    //                 _.groupBy(eventos, function (evento) {
    //                     let monthNumber = new Date(evento.start_date).getMonth();
    //                     console.log('-------------------------');
    //                     console.log(this.lineChartLabelsNumber);
    //                     console.log('-------------------------');
    //                     // if (this.lineChartLabelsNumber) {
    //                     //     this.lineChartLabelsNumber.forEach(month => {
    //                     //         // if(monthNumber == month) this.listEventos.push(evento);
    //                     //     });
    //                     // }

    //                 });
    //             });
    //             // setTimeout(function() {
    //             //     console.log(this.listEventos);
    //             // }, 1300);



    //         });

    // }

    initializeLineChart() {
        let monthNames: any = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        this.eventosService.filterEvento({})
            .subscribe(eventos => {
                // eventos.forEach(element => {
                for (let i = 0; i < eventos.length; i++) {
                    let date = new Date(eventos[i].start_date);
                    if (!this.lineChartLabels.includes(monthNames[date.getMonth()])) {
                        this.lineChartLabels.push(monthNames[date.getMonth()]);
                        this.lineChartLabelsNumber.push(date.getMonth());

                        /**------------------------------------------------ */
                        _.groupBy(eventos, function (evento) {
                            let monthNumber = new Date(evento.start_date).getMonth();
                            console.log('-------------------------');
                            // console.log(this.lineChartLabelsNumber);
                            console.log('-------------------------');
                            // if (this.lineChartLabelsNumber) {
                            //     this.lineChartLabelsNumber.forEach(month => {
                            //         // if(monthNumber == month) this.listEventos.push(evento);
                            //     });
                            // }

                        });
                    }
                }

                // });

            });

        // console.log(this.lineChartLabels);
        // console.log(this.lineChartLabelsNumber);

        // this.eventosService.filterEvento({ category: "music" })
        //     .subscribe(eventos => {
        //         var groups: any;
        //         this.eventos.music = eventos.sort(this._sortByDate(['start_date']));

        //         eventos.forEach(element => {
        //             _.groupBy(eventos, function (evento) {
        //                 let monthNumber = new Date(evento.start_date).getMonth();
        //                 console.log('-------------------------');
        //                 console.log(this.lineChartLabelsNumber);
        //                 console.log('-------------------------');
        //                 // if (this.lineChartLabelsNumber) {
        //                 //     this.lineChartLabelsNumber.forEach(month => {
        //                 //         // if(monthNumber == month) this.listEventos.push(evento);
        //                 //     });
        //                 // }

        //             });
        //         });
        //         // setTimeout(function() {
        //         //     console.log(this.listEventos);
        //         // }, 1300);



        //     });

        // this.eventosService.filterEvento({ category: "show" })
        //     .subscribe(eventos => {
        //         this.eventos.show = eventos.sort(this._sortByDate(['start_date']));
        //     });

        // this.eventosService.filterEvento({ category: "party" })
        //     .subscribe(eventos => {
        //         this.eventos.party = eventos.sort(this._sortByDate(['start_date']));
        //     });

        // let eventosMusicAmount;
        // this.eventos.music.forEach(element => {
        //     eventosMusicAmount.push({ month: element.start_date.getMonth(), amount: })
        // });

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

    // _renderLineChard(labels = []) {
    //     // console.log(labels);
    //     labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //     let lineCtx = this.line.nativeElement.getContext('2d');

    //     let data = {
    //         labels: labels,
    //         datasets: [
    //             {
    //                 label: "Eventos - Show",
    //                 fill: false,
    //                 lineTension: 0.1,
    //                 backgroundColor: "#39cccc",
    //                 borderColor: "#39cccc",
    //                 borderCapStyle: 'butt',
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: 'miter',
    //                 pointBorderColor: "rgba(75,192,192,1)",
    //                 pointBackgroundColor: "#fff",
    //                 pointBorderWidth: 1,
    //                 pointHoverRadius: 5,
    //                 pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //                 pointHoverBorderColor: "rgba(220,220,220,1)",
    //                 pointHoverBorderWidth: 2,
    //                 pointRadius: 1,
    //                 pointHitRadius: 10,
    //                 data: [1,4,3,6,6,6,6,8,10,11,12,14],
    //                 spanGaps: false,
    //             },

    //             {
    //                 label: "Eventos - Music",
    //                 fill: false,
    //                 lineTension: 0.1,
    //                 backgroundColor: "#00a65a",
    //                 borderColor: "#00a65a",
    //                 borderCapStyle: 'butt',
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: 'miter',
    //                 pointBorderColor: "rgba(75,192,192,1)",
    //                 pointBackgroundColor: "#fff",
    //                 pointBorderWidth: 1,
    //                 pointHoverRadius: 5,
    //                 pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //                 pointHoverBorderColor: "rgba(220,220,220,1)",
    //                 pointHoverBorderWidth: 2,
    //                 pointRadius: 1,
    //                 pointHitRadius: 10,
    //                 data: [1,2,3,2,3,4,5,9,10,14,15,14],
    //                 spanGaps: false,
    //             },

    //             {
    //                 label: "Eventos - Party",
    //                 fill: false,
    //                 lineTension: 0.1,
    //                 backgroundColor: "#dd4b39",
    //                 borderColor: "#dd4b39",
    //                 borderCapStyle: 'butt',
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: 'miter',
    //                 pointBorderColor: "rgba(75,192,192,1)",
    //                 pointBackgroundColor: "#fff",
    //                 pointBorderWidth: 1,
    //                 pointHoverRadius: 5,
    //                 pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //                 pointHoverBorderColor: "rgba(220,220,220,1)",
    //                 pointHoverBorderWidth: 2,
    //                 pointRadius: 1,
    //                 pointHitRadius: 10,
    //                 data: [5,4,5,6,7,8,9,14,15,15,14,12],
    //                 spanGaps: false,
    //             }
    //         ]
    //     };

    //     var chart = new Chart(
    //         lineCtx,
    //         {
    //             "type": 'line',
    //             "data": data
    //         }
    //     );
    // }

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Eventos - Show' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Eventos - Music' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Eventos - Party' }
    ];
    // public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
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
