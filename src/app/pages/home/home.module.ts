import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { StoryHighlightComponent } from './main-body/story-highlight/story-highlight.component';

@NgModule({
  declarations: [HomeComponent, MainBodyComponent, HomeHeaderComponent, HomeBodyComponent, StoryHighlightComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule
  ],
})
export class HomeModule { }
