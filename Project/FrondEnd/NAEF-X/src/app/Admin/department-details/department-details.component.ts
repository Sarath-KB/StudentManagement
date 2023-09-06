import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private service: AdminServiceService) { }

  readdata: any

  ngOnInit(): void {

    this.service.getDeptdata().subscribe((res) => {
      this.readdata = res.data;
    });

  }

  deleteDepartment(id: any) {
    this.service.DeleteDept(id).subscribe((res) => {
      console.log("Data Deleted");

    });
    window.location.reload();
  }

}
