import { Component, OnInit } from '@angular/core';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-hcomplaints',
  templateUrl: './hcomplaints.component.html',
  styleUrls: ['./hcomplaints.component.css']
})
export class HComplaintsComponent implements OnInit {

  constructor(private service:HodServiceService) { }

  hod_id:any
  readdata:any

  ngOnInit(): void {
    this.hod_id=localStorage.getItem('hod_id')
    this.service.getMyComplaints(this.hod_id).subscribe((res)=>{
      this.readdata=res.data
    })
  }

}
