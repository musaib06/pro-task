import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../sharedFolder/api-service.service';
import { loginData } from './login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  loginmodelobj :loginData=new loginData

  
  constructor(private  formBuilder:FormBuilder,private _http:HttpClient,private router:Router, private api:ApiServiceService) { }

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required],
    })
  }
  get email (){ return this.loginForm.get('email')}
  get password (){ return this.loginForm.get('password')}
  logIn(){
    this.loginmodelobj.email=this.loginForm.value.email
    this.loginmodelobj.password=this.loginForm.value.email
    
    this.api.getlog(this.loginmodelobj).subscribe(res=>{
      console.log(this.loginForm.value)

    const user =res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    })
    if(user){
    alert("logged in Successfully");
    }
    else{
      alert("User Not Found")
    }
    
  
     
    })
  }

}
