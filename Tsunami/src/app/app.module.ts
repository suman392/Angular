import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { BetterHighlightDirective } from './better-highlight-directive/better-highlight-directive';


@NgModule({
  declarations: [
    AppComponent,
    ChennaiComponent,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
