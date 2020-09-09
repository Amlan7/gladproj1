import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserTable } from 'src/app/Model/UserTable';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private service:UserService) { }

  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      id:[],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.required,Validators.email]]
    })
  }
  // onSubmit(){

  // }

  // // // // //For Adding the values entered from user 
  onSubmit(form : UserTable){
  console.log(form);
  
  this.service.addUser(form).subscribe(data=>{
  console.log(data)
  alert("User Added Successfully");
  })
  }

}