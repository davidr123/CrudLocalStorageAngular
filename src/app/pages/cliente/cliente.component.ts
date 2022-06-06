import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClienteInterface } from 'src/app/model/cliente.models';
import { ClienteService } from 'src/app/services/cliente.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public guardaclient:any=[];
  public client:any;
  public clientObj:any=[];
public oldarray:any;
public myId = uuidv4();
emp!:any;
  public getclient:ClienteInterface[]=[];
  public objClient= new ClienteInterface()
  showadd!:boolean;
  showupdate!:boolean;
public filterPost='';
  public formCrear= this.fb.group({
      id: ['', Validators.required], 
     cedula:['', Validators.required],
    nombre:['', Validators.required],
    apellido:['', Validators.required],
    direccion:['', Validators.required],
    telefono:['', Validators.required],

  });

  constructor(private fb:FormBuilder, private clienteService:ClienteService) { 

  }

  ngOnInit(): void {
  this.getclient=this.clienteService._mostrarCliente();
  }



 


createClient(){
  this.clienteService._addClient(this.formCrear.value);
  this.formCrear.reset
}

clickCLiente(){
this.formCrear.reset();
this.showadd=true;
this.showupdate=false;
}


  deleteCliente(id:string){

  for(let i=0; i<this.getclient.length; i++){
    if(this.getclient[i].id == id){
      this.getclient.splice(i,1)
    }
  }
    this.clienteService._deteleCLiente(id);
    this.getclient=this.clienteService._mostrarCliente();

  }


  editClinent(client:any){
    this.showadd=false;
    this.showupdate=true;
    this.objClient.id= client.id;
    const{id,cedula, nombre, apellido, direccion, telefono}= client;
    console.log(cedula, nombre, apellido, direccion, telefono)
    this.formCrear.setValue({id,cedula, nombre, apellido, direccion, telefono})
  }

  updateCliente(){
     let cli= this.clienteService._mostrarCliente()

  this.clienteService._updateCliente( this.objClient, this.formCrear.value, )
  alert('cliente Actualizado');

  const close= document.getElementById('close');
  close?.click();
  this.getclient=this.clienteService._mostrarCliente();


  }


}
