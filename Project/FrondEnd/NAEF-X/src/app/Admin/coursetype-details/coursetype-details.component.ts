import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-coursetype-details',
  templateUrl: './coursetype-details.component.html',
  styleUrls: ['./coursetype-details.component.css']
})
export class CoursetypeDetailsComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  readdata:any

  ngOnInit(): void {

    this.service.getCoursetypedata().subscribe((res)=>{
      this.readdata=res.data;
    });
  }

  deleteCoursetype(id:any){
    this.service.DeleteCoursetype(id).subscribe((res) => {
      console.log("Data Deleted");

    });
      window.location.reload();
  }

}
