import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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

import 'hammerjs';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Angular Material
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
