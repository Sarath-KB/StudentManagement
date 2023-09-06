import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  readdata:any

  ngOnInit(): void {

    this.service.getPlacedata().subscribe((res)=>{
      this.readdata=res.data;
    });

  }

  deleteplace(id:any){
    this.service.DeletePlace(id).subscribe((res) => {
      console.log("Data Deleted");

    });
    window.location.reload();
  }

}
