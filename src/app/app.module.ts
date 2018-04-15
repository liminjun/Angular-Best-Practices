import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { appRoutes } from './routes'



import { RegisterComponent } from "./users/sign-in.component";
import { SignInComponent } from "./users/sign-in.component";


import {CoreModule} from "./core/core.module";
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CatalogModule } from './catalog/catalog.module';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    CatalogModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    SignInComponent
    
    
  ],
  providers: [ 
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
