import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-faculty-view-more',
  templateUrl: './faculty-view-more.component.html',
  styleUrls: ['./faculty-view-more.component.css']
})
export class FacultyViewMoreComponent implements OnInit {

  constructor(private service:AdminServiceService, private router:ActivatedRoute) { }

  readdata:any
  getId:any
  imageUrl:any=''
  designation:any
  dept:any
  email:any=''
  dob:any=''
  gender:any=''
  contactno:any=''
  address:any=''
  adhaar:any=''

  ngOnInit(): void {

    this.getId=this.router.snapshot.paramMap.get('id');
    if(this.getId)
    {
      this.service.getFacultysingledata(this.getId).subscribe((res)=>{
        this.imageUrl=res.data[0].faculty_photo
        this.email=res.data[0].faculty_email
        this.designation=res.data[0].designation_title
        this.dept='Department of '+ res.data[0].dept_name
        this.dob=res.data[0].faculty_dob
        this.gender=res.data[0].faculty_gender
        this.contactno=res.data[0].faculty_contactno
        this.address=res.data[0].place_name + ', ' + res.data[0].district_name +', Kerala'
        this.adhaar=res.data[0].faculty_adhaarno
      })
    }

  }
  

}
