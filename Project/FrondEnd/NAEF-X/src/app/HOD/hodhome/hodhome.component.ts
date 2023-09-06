import { Component, OnInit } from '@angular/core';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-hodhome',
  templateUrl: './hodhome.component.html',
  styleUrls: ['./hodhome.component.css']
})
export class HODhomeComponent implements OnInit {

  constructor(private service:HodServiceService) { }

  hod_id:any
  status:any

  ngOnInit(): void {
    this.hod_id = localStorage.getItem('hod_id')
    this.service.getMydata(this.hod_id).subscribe((res) => {
      this.status=res.data[0].status
    })
  }

}
