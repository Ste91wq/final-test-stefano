import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerComponent } from './core/components/container/container.component';
import { FetchJokeComponent } from './core/components/fetch-joke/fetch-joke.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatCardJokeComponent } from './core/components/mat-card-joke/mat-card-joke.component';
import { MaterialModule } from './shared/material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    FetchJokeComponent,
    ContainerComponent,
    MatCardJokeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
