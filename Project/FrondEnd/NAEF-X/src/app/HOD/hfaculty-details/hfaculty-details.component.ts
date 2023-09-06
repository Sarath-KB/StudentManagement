import { Component, OnInit } from '@angular/core';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-hfaculty-details',
  templateUrl: './hfaculty-details.component.html',
  styleUrls: ['./hfaculty-details.component.css']
})
export class HFacultyDetailsComponent implements OnInit {

  constructor(private service:HodServiceService) { }

  dept_id:any
  readdata:any

  ngOnInit(): void {
    this.dept_id=localStorage.getItem('dept_id')
    this.service.getFacultydata(this.dept_id).subscribe((res) => {
      this.readdata=res.data
      console.log(this.readdata)
    })
  }

}
