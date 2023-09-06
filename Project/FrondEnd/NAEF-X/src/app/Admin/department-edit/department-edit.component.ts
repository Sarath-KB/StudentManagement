import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  constructor(private service:AdminServiceService, private router:ActivatedRoute, private rout:Router) { }

  getId:any

  ngOnInit(): void {
    this.getId=this.router.snapshot.paramMap.get('id');
    if(this.getId)
    {
      this.service.getDeptsingledata(this.getId).subscribe((res)=>{
        console.log(res,'res==>');
        this.deptupdataform.patchValue({
          deptname:res.data[0].dept_name
        })
      })
    }
  }

  deptupdataform = new FormGroup({
    'deptname':new FormControl('',Validators.required)
  })

  deptUpdate()
  {
    console.log(this.deptupdataform.value,'updatedform');
    if(this.deptupdataform.valid)
    {
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.deptupdataform.value.deptname.match(nameexp)){
        this.service.updateDeptdata(this.deptupdataform.value,this.getId).subscribe((res)=>{
          alert("Details Updated Successfully");
          this.rout.navigateByUrl('/Admin/departmentview')
        });
      }
      else{
        alert("Please Enter A Valid Department Name")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
