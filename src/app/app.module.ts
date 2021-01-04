import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DslikedJokesComponent } from './core/dsliked-jokes/dsliked-jokes.component';
import { FetchJokeComponent } from './core/fetch-joke/fetch-joke.component';
import { HttpClientModule } from '@angular/common/http';
import { LikedJokesComponent } from './core/liked-jokes/liked-jokes.component';
import { MaterialModule } from './shared/material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    FetchJokeComponent,
    LikedJokesComponent,
    DslikedJokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
