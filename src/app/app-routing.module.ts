import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HTMLPageComponent } from './htmlpage/htmlpage.component';
import { Assignment1Component } from './HTMLPage/day1/assignment1/assignment1.component';
import { Assignment2Component } from './HTMLPage/day1/assignment2/assignment2.component';
import { Cssd1agg1Component } from './CSSpage/day1/cssd1agg1/cssd1agg1.component';
import { Cssd1agg2Component } from './CSSpage/day1/cssd1agg2/cssd1agg2.component';
import { CSSpageComponent } from './csspage/csspage.component';
import { Cssd2agg1Component } from './CSSpage/day2/cssd2agg1/cssd2agg1.component';
import { Cssd2agg2Component } from './CSSpage/day2/cssd2agg2/cssd2agg2.component';
import { Cssd2agg6Component } from './CSSpage/day2/cssd2agg6/cssd2agg6.component';
import { Cssd2agg5Component } from './CSSpage/day2/cssd2agg5/cssd2agg5.component';
import { Cssd2agg4Component } from './CSSpage/day2/cssd2agg4/cssd2agg4.component';
import { Cssd2agg3Component } from './CSSpage/day2/cssd2agg3/cssd2agg3.component';

const routes: Routes = [
  {
    path:'home' ,
    component:HomepageComponent
  },
  
  {
path:'', redirectTo:'/home',pathMatch:'full'
  },
 
  {
    path:'html' ,
  component:HTMLPageComponent,
    children:[
      {
        path:'day1assignment1',
        component:Assignment1Component
      },
      {
        path:'day1assignment2',
        component:Assignment2Component
      }
    ]
  },
  {
    path:'css' ,
    component:CSSpageComponent,
    children:[
      {
        path:'day1assignment1',
        component:Cssd1agg1Component
      },
      {
        path:'day1assignment2',
        component:Cssd1agg2Component
      },
      {
        path:'day2assignment1',
        component:Cssd2agg1Component
      },
      {
        path:'day2assignment2',
        component:Cssd2agg2Component
      }
      ,
      {
        path:'day2assignment3',
        component:Cssd2agg3Component
      },
      {
        path:'day2assignment4',
        component:Cssd2agg4Component
      },
      {
        path:'day2assignment5',
        component:Cssd2agg5Component
      },
      {
        path:'day2assignment6',
        component:Cssd2agg6Component
      }

    ]
  },

  {
    path:'**' ,
    component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
