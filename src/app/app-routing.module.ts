import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { SchoolProjectComponent} from './school-project/school-project.component';
import { WorkComponent } from './work/work.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'school-project', component: SchoolProjectComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
