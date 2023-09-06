import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.css']
})
export class FacultyEditComponent implements OnInit {

  constructor(private service:AdminServiceService,private router:ActivatedRoute, private rout:Router) { }

  readdata1:any
  readdata2:any
  getId:any
  id:any
  readdata3:any
  readdata4:any

  ngOnInit(): void {

    this.getId=this.router.snapshot.paramMap.get('id')
    if(this.getId)
    {
      this.service.getFacultysingledata(this.getId).subscribe((res)=>{
        console.log(res,'res==>');
        this.facultyupdateform.patchValue({
          facultyname:res.data[0].faculty_name,
          facultydesignation:res.data[0].designation_id,
          facultyemail:res.data[0].faculty_email,
          facultydist:res.data[0].district_id,
          facultyplace:res.data[0].place_id,
          facultydept:res.data[0].dept_id,
          facultyusername:res.data[0].faculty_username
        })
        this.getPlace(res.data[0].district_id)
        console.log(this.facultyupdateform.value)
      })
    }
    this.service.getDesignationdata().subscribe((res)=>{
      this.readdata1=res.data
    })

    this.service.getDeptdata().subscribe((res)=>{
      this.readdata2=res.data
    })

    this.service.getDistrictdata().subscribe((res)=>{
      this.readdata4=res.data
      console.log(this.readdata4)
    })
  }

  facultyupdateform = new FormGroup({
    facultyname:new FormControl('',Validators.required),
    facultydesignation:new FormControl('',Validators.required),
    facultyemail:new FormControl('',Validators.required),
    facultydist:new FormControl('',Validators.required),
    facultyplace:new FormControl('',Validators.required),
    facultydept:new FormControl('',Validators.required),
    facultyusername:new FormControl('',Validators.required)
  })

  getPlace(e: any) {
    this.id = e?.target?.value || e; 
    this.service.getplacedata(this.id).subscribe((res) => {
      this.readdata3 = res.data;
    });
  }

  facultyupdate(){
    console.log(this.facultyupdateform.value,'updatedform');
    if(this.facultyupdateform.valid)
    {
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.facultyupdateform.value.facultyname.match(nameexp)){
        var emailexp = /^([a-zA-Z0-9.\_\-])+\@([a-zA-Z0-9.\_\-])+\.([a-zA-Z]{2,4})$/;
        if(this.facultyupdateform.value.facultyemail.match(emailexp)){
          this.service.updateFacultydata(this.facultyupdateform.value,this.getId).subscribe((res)=>{
            alert("Details Updated Successfully");
            this.rout.navigateByUrl('/Admin/facultyview')
          });
        }
        else{
          alert("Please Enter a Valid Email Id")
        }
      }
      else{
        alert("Please Enter Valid Name")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
