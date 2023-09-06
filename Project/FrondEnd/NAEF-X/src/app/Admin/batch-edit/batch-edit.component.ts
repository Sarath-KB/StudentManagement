import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-batch-edit',
  templateUrl: './batch-edit.component.html',
  styleUrls: ['./batch-edit.component.css']
})
export class BatchEditComponent implements OnInit {

  constructor(private service:AdminServiceService, private router:ActivatedRoute, private rout:Router) { }

  readdata:any
  getId:any

  ngOnInit(): void {
    
    this.getId=this.router.snapshot.paramMap.get('id')
    if(this.getId)
    {
      this.service.getBatchsingledata(this.getId).subscribe((res)=>{
        console.log(res,'res==>');
        this.batchupdateform.patchValue({
          batchname:res.data[0].batch_name,
          coursename: res.data[0].course_id
        })
        console.log(this.batchupdateform.value)
      })
    }

    this.service.getCoursedata().subscribe((res)=>{
      this.readdata=res.data
    })
  }

  batchupdateform = new FormGroup({
    batchname:new FormControl('',Validators.required),
    coursename:new FormControl('',Validators.required)
  })

  batchupdate(){
    console.log(this.batchupdateform.value,'updatedform');
    if(this.batchupdateform.valid)
    {
      var nameexp = /^([0-9]){4}[-]([0-9]){4}$/;
      if(this.batchupdateform.value.batchname.match(nameexp)){
        this.service.updateBatchdata(this.batchupdateform.value,this.getId).subscribe((res)=>{
          alert("Details Updated Successfully");
          this.rout.navigateByUrl('/Admin/batchview')
        });
      }
      else{
        alert("Please Enter a Valid Batch Name")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
