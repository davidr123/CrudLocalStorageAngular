import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudSimpleComponent } from './Crud/crud-simple/crud-simple.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { AgregarClienteComponent } from './pages/cliente/agregar-cliente/agregar-cliente.component';
import { PruebamodalComponent } from './pages/pruebamodal/pruebamodal.component';
import { EditclienteComponent } from './pages/cliente/editcliente/editcliente.component';
import { FilterPipe } from './filter.pipe';
// import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    CrudSimpleComponent,
    HomeComponent,
    PagesComponent,
    ClienteComponent,
    AgregarClienteComponent,
    PruebamodalComponent,
    EditclienteComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
