import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule}   from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatGridListModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import { HomeComponent } from './home/home.component';
import { SchoolProjectComponent } from './school-project/school-project.component';
import { WorkComponent } from './work/work.component';
import { NavComponent } from './nav/nav.component';
import { SocialComponent } from './social/social.component';

import { ModalGalleryModule } from 'angular-modal-gallery';
import { AppRoutingModule } from './app-routing.module';

import 'hammerjs';
import 'mousetrap';

@NgModule({
  declarations: [
    HomeComponent,
    SchoolProjectComponent,
    WorkComponent,
    NavComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    // Angular Material
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatToolbarModule,

    AppRoutingModule,

    ModalGalleryModule.forRoot()
  ],
  providers: [],
  bootstrap: [NavComponent]
})
export class AppModule { }
