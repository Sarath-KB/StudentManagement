import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-view-notes',
  templateUrl: './teacher-view-notes.component.html',
  styleUrls: ['./teacher-view-notes.component.css']
})
export class TeacherViewNotesComponent implements OnInit {

  constructor(private service: TeacherServiceService, private router: ActivatedRoute, private rout: Router, private sanitiser: DomSanitizer) { }

  n_id: any
  title: any
  description: any
  Pdfurl: any = ''
  sub_id: any

  ngOnInit(): void {
    this.n_id = this.router.snapshot.paramMap.get('id')
    this.service.getNotedata(this.n_id).subscribe((res) => {
      this.title = res.data[0].notes_title
      this.description = res.data[0].notes_description
      this.Pdfurl = res.data[0].files
    })
  }

  deletenotes() {
    this.sub_id = localStorage.getItem('sub_id')
    this.service.deleteNotes(this.n_id).subscribe((res) => {
      alert("Notes Deleted Successfully")
      console.log(this.sub_id)
      this.rout.navigate(['/Teacher/teacherclass/tstream', this.sub_id])
    }, err => {
      console.log(err)
    })
  }

  sanitizeurl(url: string) {
    return this.sanitiser.bypassSecurityTrustResourceUrl(url);
  }

}
