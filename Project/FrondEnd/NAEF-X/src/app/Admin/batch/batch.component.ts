import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  constructor(private service:AdminServiceService, private rout:Router) { }

  readdata:any

  ngOnInit(): void {
    this.service.getCoursedata().subscribe((res)=>{
      this.readdata=res.data
    })
  }

  batchform = new FormGroup({
    batchname:new FormControl('',Validators.required),
    coursename:new FormControl('',Validators.required)
  })

  batchsubmit(){
    if(this.batchform.valid){
      var nameexp = /^([0-9]){4}[-]([0-9]){4}$/;
      if(this.batchform.value.batchname.match(nameexp)){
        this.service.createBatchdata(this.batchform.value).subscribe((res)=>{
          alert("Batch Registered Successfully")
          this.batchform.reset();
          this.rout.navigateByUrl('/Admin/batchview')
        })
      }
      else{
        alert("Enter A Valid Batch Name")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
