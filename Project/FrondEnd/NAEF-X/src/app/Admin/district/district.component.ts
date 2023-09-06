import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  constructor(private service: AdminServiceService, private rout: Router) { }

  ngOnInit(): void {
  }

  flag: any = 0
  dist_name: any
  len: any
  check: any

  districtform = new FormGroup({
    'disname': new FormControl('', Validators.required)
  })

  districtsubmit() {
    if (this.districtform.valid) {
      var nameexp = /^([A-Za-z ]*)$/;
      if(this.districtform.value.disname.match(nameexp)){
        this.service.createDistrictdata(this.districtform.value).subscribe((res) => {
          alert('District Inserted')
          this.districtform.reset();
          this.rout.navigateByUrl('/Admin/viewdistrict')
        })
      }
      else{
        alert("Please enter a valid district name")
      }
    }
    else {
      alert('Please Provide District Name')
    }
  }
}
