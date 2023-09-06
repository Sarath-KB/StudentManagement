import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-district-edit',
  templateUrl: './district-edit.component.html',
  styleUrls: ['./district-edit.component.css']
})
export class DistrictEditComponent implements OnInit {

  constructor(private service:AdminServiceService, private router:ActivatedRoute, private rout:Router) { }

  getId:any
  flag:any=0
  dist_name:any
  len:any
  check:any

  ngOnInit(): void {
    this.getId=this.router.snapshot.paramMap.get('id');
    if(this.getId)
    {
      this.service.getDistrictsingledata(this.getId).subscribe((res)=>{
        console.log(res,'res==>');
        this.districupdataform.patchValue({
          districtname:res.data[0].district_name
        })
      })
    }
  }

  districupdataform = new FormGroup({
    'districtname':new FormControl('',Validators.required)
  })

  districtUpdate()
  {
    console.log(this.districupdataform.value,'updatedform');
    if(this.districupdataform.valid)
    {
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.districupdataform.value.districtname.match(nameexp)){
        this.service.updateDistrictdata(this.districupdataform.value,this.getId).subscribe((res)=>{
          alert("Details Updated Successfully");
          this.rout.navigateByUrl('/Admin/viewdistrict')
        });
      }
      else{
        alert("Please enter a valid placename")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
