import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-simple',
  templateUrl: './crud-simple.component.html',
  styleUrls: ['./crud-simple.component.css']
})
export class CrudSimpleComponent implements OnInit {

  public dataLogin:[]=[];
  public loginForm!:FormGroup;
  constructor(private fb:FormBuilder, private routerLink: Router) { }

  ngOnInit(): void {
  
   this.loginForm= this.fb.group({
      user:['admin', Validators.required],
      password:['admin', Validators.required]
    });

   
  
  }
  

public Login(){

const users={
    user:'admin',
    password:'admin'
    
  }

  if(this.loginForm.get('user')!.value=== 'admin' && this.loginForm.get('password')!.value=== 'admin' ){
    this.routerLink.navigateByUrl('pages');
  }else{
    alert('Invalidos')
  }

localStorage.setItem('login', JSON.stringify(users));



}



}
