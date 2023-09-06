import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-teacher-edit-notes',
  templateUrl: './teacher-edit-notes.component.html',
  styleUrls: ['./teacher-edit-notes.component.css']
})
export class TeacherEditNotesComponent implements OnInit {

  constructor(private service:TeacherServiceService, private router:ActivatedRoute, private rout:Router) { }

  imageUrl: any = ''
  getId:any
  date:any
  sub_id:any

  ngOnInit(): void {
    this.date = new Date()
    this.getId=this.router.snapshot.paramMap.get('id')
    this.service.getNotedata(this.getId).subscribe((res) => {
      this.noteregisterform.patchValue({
        title: res.data[0].notes_title,
        discription: res.data[0].notes_description,
        file: res.data[0].files
      })
    })
  }

  noteregisterform = new FormGroup({
    file: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    discription: new FormControl('', Validators.required),
  })

  onFileChange(event: any) {
    const file = event.target.files?.[0];
    if (!file) {
      return
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string
    }
    const formData = new FormData();
    formData.append("hodPforile", file);
    this.service.uploadHodProfile(formData).subscribe((res: any) => {
      console.log(res)
      if (res?.url) {
        this.noteregisterform.patchValue({ file: res.url })
      }
      console.log(this.noteregisterform.value)
    }, err => {
      console.log(err)
    })
  }

  submit() {

    if (this.noteregisterform.valid) {
      this.sub_id=localStorage.getItem('sub_id')
      this.service.updateNotesdata(this.noteregisterform.value,this.getId).subscribe((res) => {
        alert("Notes Updated Successfully")
        this.rout.navigateByUrl('/Teacher/teacherclass/tstream/'+this.sub_id)
      })
    }
  }

}
