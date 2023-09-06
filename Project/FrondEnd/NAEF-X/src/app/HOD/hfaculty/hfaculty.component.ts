import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-hfaculty',
  templateUrl: './hfaculty.component.html',
  styleUrls: ['./hfaculty.component.css']
})
export class HFacultyComponent implements OnInit {

  constructor(private service:HodServiceService, private router:ActivatedRoute) { }

  getId:any
  imageUrl:any=''
  name:any
  designation:any
  dept:any
  email:any
  contact:any
  place:any
  district:any
  dob:any
  gender:any
  adhaar:any


  ngOnInit(): void {
    this.getId=this.router.snapshot.paramMap.get('id');
    this.service.getFacultysingledata(this.getId).subscribe((res) => {
      this.imageUrl=res.data[0].faculty_photo
      this.name=res.data[0].faculty_name
      this.designation=res.data[0].designation_title
      this.dept=res.data[0].dept_name
      this.email=res.data[0].faculty_email
      this.contact=res.data[0].faculty_contactno
      this.place=res.data[0].place_name
      this.district=res.data[0].district_name
      this.dob=res.data[0].faculty_dob
      this.gender=res.data[0].faculty_gender
      this.adhaar=res.data[0].faculty_adhaarno
    })
  }

}
