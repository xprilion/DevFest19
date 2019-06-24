import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { SpeakersComponent } from './core/speakers/speakers.component';
import { ScheduleComponent } from './core/schedule/schedule.component';
import { TeamComponent } from './core/team/team.component';
import { BlogComponent } from './core/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpeakersComponent,
    ScheduleComponent,
    TeamComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
