import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})
export class PlaceEditComponent implements OnInit {

  constructor(private service:AdminServiceService, private router:ActivatedRoute, private rout:Router) { }

  readdata:any
  getId:any

  ngOnInit(): void {
    this.getId=this.router.snapshot.paramMap.get('id')
    if(this.getId)
    {
      this.service.getPlacesingledata(this.getId).subscribe((res)=>{
        console.log(res,'res==>');
        this.placeupdateform.patchValue({
          placename:res.data[0].place_name,
          distname: res.data[0].district_id
        })
        console.log(this.placeupdateform.value)
      })
    }
    this.service.getDistrictdata().subscribe((res)=>{
      this.readdata=res.data
    })
  }
  placeupdateform = new FormGroup({
    'placename':new FormControl('',Validators.required),
    'distname':new FormControl('',Validators.required)
  })

  placeUpdate()
  {
    console.log(this.placeupdateform.value,'updatedform');
    if(this.placeupdateform.valid)
    {
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.placeupdateform.value.placename.match(nameexp)){
        this.service.updatePlacedata(this.placeupdateform.value,this.getId).subscribe((res)=>{
          alert("Details Updated Successfully");
          this.rout.navigateByUrl('/Admin/viewplace')
        });
      }
      else{
        alert("Please Enter A Valid Placename")
      }
    }
    else{
      alert('Please Fill Required Fields...!!')
    }
  }

}
