import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  constructor(private service:AdminServiceService, private rout:Router) { }

  ngOnInit(): void {
  }

  designationform = new FormGroup({
    'designationtitle': new FormControl('',Validators.required)
  })

  designationsubmit(){
    if(this.designationform.valid){
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.designationform.value.designationtitle.match(nameexp)){
        this.service.createDesignationdata(this.designationform.value).subscribe((res)=>{
          alert('Designation Addedd Successfully')
          this.designationform.reset();
          this.rout.navigateByUrl('/Admin/designationview')
        })
      }
      else{
        alert("Please Enter A Valid Designation Title")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
