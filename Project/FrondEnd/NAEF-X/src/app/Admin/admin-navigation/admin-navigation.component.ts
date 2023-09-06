import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit,
AfterContentInit {

  panelOpenState = false;

  constructor(private service:AdminServiceService, private rout:Router) { }

  admin_id:any
  image:any=''

  ngOnInit(): void {
    this.admin_id=localStorage.getItem('admin_id')
    this.service.getAdminsingledata(this.admin_id).subscribe((res)=>{
      this.image=res.data[0].admin_photo
    })
  }

  ngAfterContentInit(): void {
  }

  logout(){
    localStorage.removeItem('admin_id')
    this.rout.navigateByUrl('/ghome')
  }

}
