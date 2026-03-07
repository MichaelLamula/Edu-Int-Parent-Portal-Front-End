import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerformanceComponent } from './performance/performance.component';
import { PledgesComponent } from './pledges/pledges.component';
import { TeacherNotesComponent } from './teacher-notes/teacher-notes.component';
import { TimetableComponent } from './timetable/timetable.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'performance', component: PerformanceComponent },
      { path: 'pledges', component: PledgesComponent },
      { path: 'teacher-notes', component: TeacherNotesComponent },
      { path: 'timetable', component: TimetableComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
