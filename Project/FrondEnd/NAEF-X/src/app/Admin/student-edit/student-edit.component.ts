import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  constructor(private service:AdminServiceService,private router:ActivatedRoute, private rout:Router) { }

  readdata:any
  getId:any
  id:any
  readdata3:any
  readdata4:any

  ngOnInit(): void {

    this.getId=this.router.snapshot.paramMap.get('id')
    if(this.getId)
    {
      this.service.getStudentsingledata(this.getId).subscribe((res)=>{
        console.log(res,'res==>');
        this.studentupdateform.patchValue({
          studentname:res.data[0].student_name,
          classname:res.data[0].class_id,
          studentemail:res.data[0].student_email,
          studentusername:res.data[0].student_username,
          studdist:res.data[0].district_id,
          studplace:res.data[0].place_id,
        })
        this.getPlace(res.data[0].district_id)
        console.log(this.studentupdateform.value)
      })
    }

    this.service.getClassdata().subscribe((res)=>{
    this.readdata=res.data;
    })

    this.service.getDistrictdata().subscribe((res)=>{
      this.readdata4=res.data
      console.log(this.readdata4)
    })
  }

  getPlace(e: any) {
    this.id = e?.target?.value || e; 
    this.service.getplacedata(this.id).subscribe((res) => {
      this.readdata3 = res.data;
    });
  }

  studentupdateform = new FormGroup({
    studentname:new FormControl('',Validators.required),
    classname:new FormControl('',Validators.required),
    studentemail:new FormControl('',Validators.required),
    studentusername:new FormControl('',Validators.required),

    studdist:new FormControl('',Validators.required),
    studplace:new FormControl('',Validators.required)
  })

  updatestudent(){
    if(this.studentupdateform.valid)
    {
      var nameexp=/^([A-Za-z ]*)$/;
      if(this.studentupdateform.value.studentname.match(nameexp)){
        var emailexp=/^([a-zA-Z0-9.\_\-])+\@([a-zA-Z0-9.\_\-])+\.([a-zA-Z]{2,4})$/;
        if(this.studentupdateform.value.studentemail.match(emailexp)){
          this.service.updateStudentdata(this.studentupdateform.value,this.getId).subscribe((res)=>{
            alert("Details Updated Successfully");
            this.rout.navigateByUrl('/Admin/studentview')
          });
        }
        else{
          alert("Enter a valid email")
        }
      }
      else{
        alert("Enter a valid name")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
