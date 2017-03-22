import { ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { EventosService } from '../../../services/eventos.service';
import { Evento } from '../../../../../class/evento';

@Component({
    selector: 'app-chartjs',
    templateUrl: './chartjs.component.html',
    styleUrls: ['./chartjs.component.css']
})
export class ChartjsComponent implements OnInit {

    @ViewChild('line') line: ElementRef;

    eventos: any;



    constructor(private eventosService: EventosService) {
        this.eventos = {};
        // this.eventos.music = new Array();
        // this.eventos.show = new Array();
        // this.eventos.party = new Array();


    }

    ngOnInit() {

        // this.initializeLineChart();
        this._renderLineChard();
    }

    // initializeLineChart() {
    //     let _labels: any = [];
    //     let monthNames: any = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //     this.eventosService.filterEvento({})
    //         .subscribe(eventos => {
    //             eventos.forEach(element => {
    //                 let date = new Date(element.start_date);
    //                 if (!_labels.includes(date.getMonth())) _labels.push(monthNames[date.getMonth()]);
    //             });

    //         });

    //     this.eventosService.filterEvento({ category: "music" })
    //         .subscribe(eventos => {
    //             this.eventos.music = eventos.sort(this._sortByDate(['start_date']));
    //         });

    //     this.eventosService.filterEvento({ category: "show" })
    //         .subscribe(eventos => {
    //             this.eventos.show = eventos.sort(this._sortByDate(['start_date']));
    //         });

    //     this.eventosService.filterEvento({ category: "party" })
    //         .subscribe(eventos => {
    //             this.eventos.party = eventos.sort(this._sortByDate(['start_date']));
    //         });

    //     let eventosMusicAmount;
    //     this.eventos.music.forEach(element => {
    //         eventosMusicAmount.push({ month: element.start_date.getMonth(), amount: })
    //     });

    //     this._renderLineChard(_labels);

    // }

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

    _renderLineChard(labels = []) {
        // console.log(labels);
        labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let lineCtx = this.line.nativeElement.getContext('2d');

        let data = {
            labels: labels,
            datasets: [
                {
                    label: "Eventos - Show",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "#39cccc",
                    borderColor: "#39cccc",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [1,4,3,6,6,6,6,8,10,11,12,14],
                    spanGaps: false,
                },

                {
                    label: "Eventos - Music",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "#00a65a",
                    borderColor: "#00a65a",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [1,2,3,2,3,4,5,9,10,14,15,14],
                    spanGaps: false,
                },

                {
                    label: "Eventos - Party",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "#dd4b39",
                    borderColor: "#dd4b39",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [5,4,5,6,7,8,9,14,15,15,14,12],
                    spanGaps: false,
                }
            ]
        };

        var chart = new Chart(
            lineCtx,
            {
                "type": 'line',
                "data": data
            }
        );
    }

}
