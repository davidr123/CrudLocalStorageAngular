import { v4 as uuidv4 } from 'uuid';


export class ClienteInterface{

    constructor(
        public id:string= '',
       public cedula:string='',
       public nombre:string='', 
       public apellido:string='', 
       public direccion:string='', 
       public telefono:string=''){
       
       

    }
}