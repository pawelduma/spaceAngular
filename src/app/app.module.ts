import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A2sCommModule } from 'a2s-comm';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceModule } from './space/space.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    A2sCommModule,
    HttpClientModule,
    SpaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
