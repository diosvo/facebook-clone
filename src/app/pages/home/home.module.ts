import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainBodyComponent } from './main-body/main-body.component';

@NgModule({
  declarations: [HomeComponent, MainBodyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule
  ],
})
export class HomeModule { }
