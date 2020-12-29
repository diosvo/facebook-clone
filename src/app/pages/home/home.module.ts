import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from 'src/app/shared/module/share.module';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { MainBodyComponent } from './home-body/main-body/main-body.component';
import { StoryHighlightComponent } from './home-body/main-body/story-highlight/story-highlight.component';
import { ForumComponent } from './home-body/main-body/forum/forum.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeBodyComponent,
    MainBodyComponent,
    StoryHighlightComponent,
    ForumComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule,

    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule
  ],
})
export class HomeModule { }
