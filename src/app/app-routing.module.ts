import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentListComponent } from './student-list/student-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/student-list', pathMatch: 'full' },
  {
    path: 'activity-log', 
    component: ActivityLogComponent,  },
  { path: 'profile/:id', component: ProfileComponent },
  { path:'student-list', component:StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }