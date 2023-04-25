import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HTMLPageComponent } from './htmlpage/htmlpage.component';
import { Assignment1Component } from './HTMLPage/day1/assignment1/assignment1.component';
import { Assignment2Component } from './HTMLPage/day1/assignment2/assignment2.component';
import { CSSpageComponent } from './csspage/csspage.component';
import { Cssd1agg1Component } from './CSSpage/day1/cssd1agg1/cssd1agg1.component';
import { Cssd1agg2Component } from './CSSpage/day1/cssd1agg2/cssd1agg2.component';
import { Cssd2agg1Component } from './CSSpage/day2/cssd2agg1/cssd2agg1.component';
import { Cssd2agg2Component } from './CSSpage/day2/cssd2agg2/cssd2agg2.component';
import { Cssd2agg3Component } from './CSSpage/day2/cssd2agg3/cssd2agg3.component';
import { Cssd2agg4Component } from './CSSpage/day2/cssd2agg4/cssd2agg4.component';
import { Cssd2agg5Component } from './CSSpage/day2/cssd2agg5/cssd2agg5.component';
import { Cssd2agg6Component } from './CSSpage/day2/cssd2agg6/cssd2agg6.component';
import { WecomeComponent } from './HTMLPage/wecome/wecome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent,
    HTMLPageComponent,
    Assignment1Component,
    Assignment2Component,
    CSSpageComponent,
    Cssd1agg1Component,
    Cssd1agg2Component,
    Cssd2agg1Component,
    Cssd2agg2Component,
    Cssd2agg3Component,
    Cssd2agg4Component,
    Cssd2agg5Component,
    Cssd2agg6Component,
    WecomeComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
