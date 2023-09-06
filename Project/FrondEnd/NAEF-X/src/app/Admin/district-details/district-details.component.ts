import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-district-details',
  templateUrl: './district-details.component.html',
  styleUrls: ['./district-details.component.css']
})
export class DistrictDetailsComponent implements OnInit {

  constructor(private service: AdminServiceService) { }

  readdata: any

  ngOnInit(): void {
    this.service.getDistrictdata().subscribe((res) => {
    this.readdata = res.data;
    });
  }


  DeleteDis(id: any) {
    this.service.DeleteDistrict(id).subscribe((res) => {
      console.log("Data Deleted");

    });
      window.location.reload();
  }
}
