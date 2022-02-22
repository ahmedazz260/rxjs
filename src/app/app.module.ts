import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AjaxComponent } from './operators/creation/ajax/ajax.component';
import { CreateComponent } from './operators/creation/create/create.component';
import { CreationComponent } from './operators/creation/creation.component';
import { OfComponent } from './operators/creation/of/of.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      CreationComponent,
      AjaxComponent,
      OfComponent,
      CreateComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
