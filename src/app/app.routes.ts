import { Routes } from '@angular/router';
import { ReminderComponent } from './pages/reminder/reminder.component';
import { TableComponent } from './pages/table/table.component';
import { Component404 } from './pages/404/404.component';

export const routes: Routes = [
    {
        path: "", component: TableComponent, pathMatch: "full",
    },
    {
        path: "reminder/:id", component: ReminderComponent
    },
    { 
        path: '**', component: Component404 
    }
];
