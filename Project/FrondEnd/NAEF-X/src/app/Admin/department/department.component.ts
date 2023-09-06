import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private service:AdminServiceService, private rout:Router) { }

  ngOnInit(): void {
  }

  deptform = new FormGroup({
    'deptname': new FormControl('',Validators.required)
  })

  deptsubmit(){
    if(this.deptform.valid){
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.deptform.value.deptname.match(nameexp)){
        this.service.createDeptdata(this.deptform.value).subscribe((res)=>{
          console.log("Department Inserted");
          this.deptform.reset();
          this.rout.navigateByUrl('/Admin/departmentview')
        })
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
