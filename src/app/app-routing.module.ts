import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudSimpleComponent } from './Crud/crud-simple/crud-simple.component';
import { AgregarClienteComponent } from './pages/cliente/agregar-cliente/agregar-cliente.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { PruebamodalComponent } from './pages/pruebamodal/pruebamodal.component';



const routes: Routes = [
  {path:'crud', component:CrudSimpleComponent},
  {path:'prueba', component:PruebamodalComponent},

  {path:'pages', component:PagesComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'cliente', component:ClienteComponent},
    {path:'agregarcliente/nuevo', component:AgregarClienteComponent},
    {path:'agregarcliente/:id', component:AgregarClienteComponent},




  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
