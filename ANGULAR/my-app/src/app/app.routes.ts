import { RouterOutlet, Routes } from '@angular/router';
import { Router } from 'express';
import { BoomComponent } from './boom/boom.component';
import { CarComponent } from './car/car.component';

export const routes: Routes = [
    {
        path:'boom',
component:BoomComponent
    },
    {
    path:'car',
    component:CarComponent}
];
