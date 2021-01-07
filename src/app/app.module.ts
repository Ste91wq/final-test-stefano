import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FetchJokeComponent } from './core/components/fetch-joke/fetch-joke.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { NgModule } from '@angular/core';
import { ContainerComponent } from './core/components/container/container.component';
import { MatCardJokeComponent } from './core/components/mat-card-joke/mat-card-joke.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchJokeComponent,
    ContainerComponent,
    MatCardJokeComponent
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
