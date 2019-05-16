import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestTestComponent } from './rest-test/rest-test.component';
import { DateComponent } from './date/date.component';
import { RestWeekmenuComponent } from './rest-weekmenu/rest-weekmenu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RestTestComponent,
    DateComponent,
    RestWeekmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
