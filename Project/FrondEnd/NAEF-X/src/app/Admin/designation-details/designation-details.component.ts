import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-designation-details',
  templateUrl: './designation-details.component.html',
  styleUrls: ['./designation-details.component.css']
})
export class DesignationDetailsComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  readdata:any

  ngOnInit(): void {

    this.service.getDesignationdata().subscribe((res)=>{
      this.readdata=res.data;
    });

  }

  deleteDesignation(id: any) {
    this.service.DeleteDesignation(id).subscribe((res) => {
      console.log("Data Deleted");

    });
      window.location.reload();
  }
}
