import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private service:AdminServiceService) { }

  admin_id:any
  imageUrl:any=''
  name:any
  designation:any
  email:any

  ngOnInit(): void {
    this.admin_id=localStorage.getItem('admin_id')
    this.service.getAdminsingledata(this.admin_id).subscribe((res) => {
      this.imageUrl=res.data[0].admin_photo
      this.name=res.data[0].admin_name
      this.designation=res.data[0].admin_designation
      this.email=res.data[0].admin_email
    });
  }

}
