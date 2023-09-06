import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  readdata:any

  ngOnInit(): void {
    this.service.getBatchdata().subscribe((res)=>{
      this.readdata=res.data;
    })
  }

  deleteBatch(id: any) {
    this.service.DeleteBatch(id).subscribe((res) => {
      console.log("Data Deleted");

    });
      window.location.reload();
  }

}
