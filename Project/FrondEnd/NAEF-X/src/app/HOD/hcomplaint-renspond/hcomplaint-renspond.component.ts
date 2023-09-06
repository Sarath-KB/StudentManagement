import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-hcomplaint-renspond',
  templateUrl: './hcomplaint-renspond.component.html',
  styleUrls: ['./hcomplaint-renspond.component.css']
})
export class HComplaintRenspondComponent implements OnInit {

  constructor(private service:HodServiceService, private router:ActivatedRoute, private rout:Router) { }

  comp_id:any
  name:any
  email:any
  to:any
  category:any
  complaint:any
  date:any

  ngOnInit(): void {
    this.comp_id=this.router.snapshot.paramMap.get('id')
    this.service.getSingleComplaintdata(this.comp_id).subscribe((res)=>{
      this.responseform.patchValue({
        status: res.data[0].complaint_status
      })
      if(res.data[0].complainant_type==='Teacher'){
        this.name=res.data[0].faculty_name
        this.email=res.data[0].faculty_email
      }
      else if(res.data[0].complainant_type==='Student'){
        this.name=res.data[0].student_name
        this.email=res.data[0].student_email
      }
      this.to=res.data[0].complaint_target
      this.category=res.data[0].complainant_category_title
      this.complaint=res.data[0].complaint
      this.date=res.data[0].complaint_date
    })
  }

  responseform = new FormGroup({
    status: new FormControl('',Validators.required),
    response: new FormControl('',Validators.required)
  })

  update(){
    if(this.responseform.valid){
      this.service.UpdateComplaintdata(this.responseform.value,this.comp_id).subscribe((res)=>{
        alert("Complaint Status Updated Successfully")
        this.rout.navigateByUrl('/HOD/hviewcomplaints')
      })
    }
    else{
      alert("Please fill your response...!!")
    }
  }

}
