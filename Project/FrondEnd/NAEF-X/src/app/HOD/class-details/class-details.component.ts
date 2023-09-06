import { Component, OnInit } from '@angular/core';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  constructor(private service:HodServiceService) { }

  readdata:any
  did:any

  ngOnInit(): void {
    this.did=localStorage.getItem('dept_id')
    this.service.getClassdata(this.did).subscribe((res)=>{
      this.readdata=res.data;
    })
  }

  DeleteClass(id:any){
    this.service.DeleteClass(id).subscribe((res) => {
      console.log("Data Deleted");

    });
      window.location.reload();
  }

}
