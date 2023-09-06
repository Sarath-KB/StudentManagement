import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-stream-view',
  templateUrl: './student-stream-view.component.html',
  styleUrls: ['./student-stream-view.component.css']
})
export class StudentStreamViewComponent implements OnInit {

  constructor(private service:StudentServiceService, private router:ActivatedRoute, private sanitiser: DomSanitizer) { }

  n_id:any
  title:any
  description:any
  url:any

  ngOnInit(): void {
    this.n_id=this.router.snapshot.paramMap.get('id')
    this.service.getNotes(this.n_id).subscribe((res)=>{
      console.log(res)
      this.title=res.data[0].notes_title
      this.description=res.data[0].notes_description
      this.url=res.data[0].files
    })
    console.log(this.title)
  }

  sanitizeurl(url: string) {
    return this.sanitiser.bypassSecurityTrustResourceUrl(url);
  }

}
