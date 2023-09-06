import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor(private service:AdminServiceService, private rout:Router) { }

  readdata:any

  ngOnInit(): void {
    this.service.getDistrictdata().subscribe((res)=>{
      this.readdata=res.data
    })
  }

  placeform=new FormGroup({
    'placename':new FormControl('',Validators.required),
    'districtname':new FormControl('',Validators.required)
  })

  placesubmit(){
    if(this.placeform.valid){
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.placeform.value.placename.match(nameexp)){
        this.service.createPlacedata(this.placeform.value).subscribe((res)=>{
          console.log("Place Inserted");
          this.placeform.reset();
          this.rout.navigateByUrl('/Admin/viewplace')
        })
      }
      else{
        alert("Please enter a valid placename")
      }
    }
    else{
      alert('All Fields are Required...')
    }
  }

}
