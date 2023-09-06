import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-complaints',
  templateUrl: './admin-complaints.component.html',
  styleUrls: ['./admin-complaints.component.css']
})
export class AdminComplaintsComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  readdata:any

  ngOnInit(): void {
    this.service.complaintstome().subscribe((res)=>{
      this.readdata=res.data
    })
  }

}
