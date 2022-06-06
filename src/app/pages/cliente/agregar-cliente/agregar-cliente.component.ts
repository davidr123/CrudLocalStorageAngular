import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {


  public formCrear= this.fb.group({
   
     id:uuidv4(),
    cedula:['', Validators.required],
    nombre:['', Validators.required],
    apellido:['', Validators.required],
    direccion:['', Validators.required],
    telefono:['', Validators.required],

  });

  constructor(private fb:FormBuilder, public clienteService:ClienteService, 
    private _Activatedroute:ActivatedRoute) { }

    

  ngOnInit(): void {
    // this._Activatedroute.params.
    // subscribe(({id})=>this.obtenerCLienteId(id))
  }

 

  addCliente(){
    this.clienteService._addClient(this.formCrear.value);
    this.formCrear.reset();
      }


  // obtenerCLienteId(ids:string){
  //   this.clienteService._obtenerclienteId(ids)

  //   const {id, cedula, nombre, apellido, direccion, telefono }= this.formCrear.value;
  //   console.log(id, cedula, nombre, apellido, direccion, telefono);
    
  //   this.formCrear.setValue({id, cedula, nombre, apellido, direccion, telefono});
  // }
    
}
