import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EventosService } from './services/eventos.service';
import { TimelineService } from './services/timeline.service';

import { routes } from './app.router';

import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { MomentModule } from 'angular2-moment/moment.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EventosComponent } from './eventos/eventos.component';
import { LoginComponent } from './login/login.component';
import { EventosDetailComponent } from './eventos-detail/eventos-detail.component';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GraphsComponent } from './admin/graphs/graphs.component';
import { EventosAddComponent } from './admin/eventos/eventos-add/eventos-add.component';
import { EventosListComponent } from './admin/eventos/eventos-list/eventos-list.component';
import { EventosEditComponent } from './admin/eventos/eventos-edit/eventos-edit.component';
import { RecentEventosComponent } from './admin/dashboard/recent-eventos/recent-eventos.component';
import { TimelineComponent } from './admin/dashboard/timeline/timeline.component';
import { ChartjsComponent } from './admin/dashboard/chartjs/chartjs.component';



@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    LoginComponent,
    EventosDetailComponent,
    DashboardComponent,
    GraphsComponent,
    AdminComponent,
    EventosAddComponent,
    EventosListComponent,
    EventosEditComponent,
    AboutComponent,
    RecentEventosComponent,
    TimelineComponent,
    ChartjsComponent
    // SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    Ng2DatetimePickerModule,
    ChartsModule
  ],
  providers:[EventosService, TimelineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
