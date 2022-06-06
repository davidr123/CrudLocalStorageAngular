import { Injectable } from '@angular/core';
import { ClienteInterface } from '../model/cliente.models';
import { ClienteComponent } from '../pages/cliente/cliente.component';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public objcliente!:ClienteComponent;
  public arryaCliente: ClienteInterface[]=[];
  client:ClienteInterface[]=[];
  
  public _ocultarModal: boolean= true;
  public arrayclient=[{
    id: uuidv4(),
    cedula:'09090989',
    nombre:'Freddy',
    apellido:'Rada',
    direccion:'duran',
    telefono:'90909889'

    
  }]
  constructor() {}



 

   _addClient(data:{id:string, cedula:string, nombre:string, apellido:string, direccion:string, telefono:string}){
    let emps = JSON.parse(localStorage.getItem('cliente') || '');
    emps.push(data);
    localStorage.setItem('cliente', JSON.stringify(emps));
    location.reload();
  

   }

   _mostrarCliente(){
    if(localStorage.getItem('cliente') === null || localStorage.getItem('cliente') == undefined){
      alert(' No employees Found... Creating...');
      
 localStorage.setItem('cliente', JSON.stringify(this.arrayclient))
 return

    }else{
      let emp = JSON.parse(localStorage.getItem('cliente') || '');
      // location.reload();
     return emp;
    }
   }


   _deteleCLiente(id:string){
    let emps = JSON.parse(localStorage.getItem('cliente') ||'');
    for(let i = 0; i <emps.length; i++) {
     if(emps[i].id == id) {
       emps.splice(i, 1);
     }
  }
     localStorage.setItem('cliente', JSON.stringify(emps));

   }


   _updateCliente(data:any, newdata:any){
    let emps = JSON.parse(localStorage.getItem('cliente')|| '');
    for(let i = 0; i <emps.length; i++) {
      if(emps[i].id == data.id) {
        emps[i] = newdata;
      }
   }
   localStorage.setItem('cliente', JSON.stringify(emps));

   }


  //  _obtenerclienteId(id:string){
  //   let emps = JSON.parse(localStorage.getItem('cliente')|| '');
  //   for(let i = 0; i <emps.length; i++) {
  //     if(emps[i].id === id) {
  //      return emps[i];
  //     }
  //  }

  //  }

}
