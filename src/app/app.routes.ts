import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'shop',component:ShopComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
];

