import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HodServiceService } from '../hod-service.service';

@Component({
  selector: 'app-hod-navbar',
  templateUrl: './hod-navbar.component.html',
  styleUrls: ['./hod-navbar.component.css']
})
export class HodNavbarComponent implements OnInit {

  constructor(private service:HodServiceService,private rout:Router) { }

  hod_id:any
  imageUrl:any=''
  hodname:any
  deptname:any
  status:any

  ngOnInit(): void {
    this.hod_id = localStorage.getItem('hod_id')
    this.service.getMydata(this.hod_id).subscribe((res) => {
      this.imageUrl=res.data[0].faculty_photo
      this.hodname=res.data[0].faculty_name
      this.deptname=res.data[0].dept_name
      this.status=res.data[0].status
    })
  }

  t_id:any

  Teahermode(){
    this.t_id=localStorage.getItem("hod_id")
    localStorage.removeItem("hod_id")
    this.rout.navigateByUrl('/Teacher')
    localStorage.setItem("t_id",this.t_id)
  }

  hodlogout(){
    localStorage.removeItem("hod_id")
    localStorage.removeItem("dept_id")
    this.rout.navigateByUrl('/ghome')

  }

}
