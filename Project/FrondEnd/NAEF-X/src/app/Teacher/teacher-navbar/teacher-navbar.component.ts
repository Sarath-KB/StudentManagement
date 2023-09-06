import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-navbar',
  templateUrl: './teacher-navbar.component.html',
  styleUrls: ['./teacher-navbar.component.css']
})
export class TeacherNavbarComponent implements OnInit {

  constructor(private service:TeacherServiceService, private rout:Router) { }

  t_id:any
  imageUrl:any=''
  name:any
  deptname:any
  status:any

  ngOnInit(): void {
    this.t_id = localStorage.getItem('t_id')
    this.service.getMydata(this.t_id).subscribe((res) => {
      this.imageUrl=res.data[0].faculty_photo
      this.name=res.data[0].faculty_name
      this.deptname=res.data[0].dept_name
      this.status=res.data[0].status
    })
  }

  TeacherLogout(){
    console.log('hi')
    localStorage.removeItem("t_id")
    localStorage.removeItem("dept_id")
    this.rout.navigateByUrl('/ghome')
  }

}
