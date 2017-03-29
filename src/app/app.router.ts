import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EventosComponent } from './eventos/eventos.component';
import { LoginComponent } from './auth/login/login.component';
import { EventosDetailComponent } from './eventos-detail/eventos-detail.component';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GraphsComponent } from './admin/graphs/graphs.component';
import { EventosListComponent } from './admin/eventos/eventos-list/eventos-list.component';
import { EventosAddComponent } from './admin/eventos/eventos-add/eventos-add.component';
import { EventosEditComponent } from './admin/eventos/eventos-edit/eventos-edit.component';

export const router: Routes = [
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'events', component: EventosComponent },
    { path: 'events-detail/:id', component: EventosDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: EventosComponent }, //TODO

    { path: 'admin', component: AdminComponent, children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'events', component: EventosListComponent },
        { path: 'events/add', component: EventosAddComponent },
        { path: 'events/edit/:id', component: EventosEditComponent }
    ]},

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
