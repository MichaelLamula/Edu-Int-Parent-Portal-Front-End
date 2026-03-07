import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerformanceComponent } from './performance/performance.component';
import { PledgesComponent } from './pledges/pledges.component';
import { TeacherNotesComponent } from './teacher-notes/teacher-notes.component';
import { TimetableComponent } from './timetable/timetable.component';

@NgModule({
  declarations: [
    App,
    MainLayoutComponent,
    SidenavComponent,
    DashboardComponent,
    PerformanceComponent,
    PledgesComponent,
    TeacherNotesComponent,
    TimetableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
