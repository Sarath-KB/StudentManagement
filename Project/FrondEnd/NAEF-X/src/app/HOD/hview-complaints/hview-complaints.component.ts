import { Component, OnInit } from '@angular/core';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-hview-complaints',
  templateUrl: './hview-complaints.component.html',
  styleUrls: ['./hview-complaints.component.css']
})
export class HViewComplaintsComponent implements OnInit {

  constructor(private service:HodServiceService) { }

  h_id:any
  readdata:any

  ngOnInit(): void {
    this.h_id=localStorage.getItem('hod_id')
    this.service.getTomeComplaints(this.h_id).subscribe((res)=>{
      this.readdata=res.data
    })
  }

}
