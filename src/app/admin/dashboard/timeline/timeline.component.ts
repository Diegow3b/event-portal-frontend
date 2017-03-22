import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../../../services/timeline.service';
import { Timeline } from '../../../../../class/timeline';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

    timelines: Timeline[];

    constructor(private timelineService: TimelineService) {
        this.timelines = new Array();
    }

    ngOnInit() {
        this.getAllTimelineAdmin();
    }

    getStyle(action) {
        switch (action) {
            case "add":
                return "fa fa-pencil bg-blue";
            case "edit":
                return "fa fa-wrench bg-yellow";
            case "delete":
                return "fa fa-times bg-red";
            default:
                return "fa fa-pencil bg-blue";
        }
    }

    getAllTimelineAdmin() {
        this.timelineService.getTimeline()
            .subscribe(timelines => {
                this.timelines = timelines;
            });
    }

}
