import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiServiceService } from '../sharedFolder/api-service.service';
import { signupData } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signupForm!:FormGroup
  signupmodelobj :signupData = new signupData
  showInput:boolean=false
  

  constructor(private formBuilder:FormBuilder,private _http:HttpClient, private router:Router,private api:ApiServiceService ) { }

  ngOnInit(): void {
    this.signupForm =this.formBuilder.group({
       name:['',Validators.required],
       email:['',[Validators.required, Validators.email]],
       password:['',Validators.required],
       mobile:[''],
       address:[''],
       pincode:['']


    })
    
  }
  get name (){ return this.signupForm.get('name')}
  get email (){ return this.signupForm.get('email')}
  get password (){ return this.signupForm.get('password')}
  get mobile (){ return this.signupForm.get('mobile')}
  get address (){ return this.signupForm.get('address')}
  get pincode (){ return this.signupForm.get('pincode')}
  //method for crfeating new user
  signUp(): void{
    console.log('button working');
    console.log(this.signupForm.value);
    this.signupmodelobj.name=this.signupForm.value.name
    this.signupmodelobj.email=this.signupForm.value.email
    this.signupmodelobj.password=this.signupForm.value.password
    this.signupmodelobj.mobile=this.signupForm.value.mobile
    this.signupmodelobj.address=this.signupForm.value.address
    this.signupmodelobj.pincode=this.signupForm.value.pincode

    this.api.postSignup(this.signupmodelobj).subscribe(res=>{
      console.log(res);
      alert("Sign up successfully");
    }, err=>{
       alert("Something went wrong")
    })

    
    
      this.signupForm.reset();
      this.router.navigate(['login'])
  }
  toggleInput(){
      this.showInput=!this.showInput
  }
  

}
