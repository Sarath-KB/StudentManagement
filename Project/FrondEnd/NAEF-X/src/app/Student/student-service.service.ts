import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private client:HttpClient) { }

    //Connect Frondend and Backend

    profileapi='http://localhost:3000/sprofile';
    teachersapi='http://localhost:3000/steacher';
    complaintcategoryapi='http://localhost:3000/ccategory';
    thodapi='http://localhost:3000/thod';
    teacherapi='http://localhost:3000/sclassteacher';
    complaintapi='http://localhost:3000/scomplaint';
    semesterapi='http://localhost:3000/mysemesters';
    subjectapi='http://localhost:3000/ssubjects';
    notesapi='http://localhost:3000/snotes';
    singlenoteapi='http://localhost:3000/singlenote';
    assignmentapi='http://localhost:3000/sassignments';
    singleassignment='http://localhost:3000/singleassignments';
    hodApi='http://localhost:3000/hod';
    submitassapi='http://localhost:3000/asssub';
    distapi='http://localhost:3000/hdist';
    placeapi='http://localhost:3000/hplace';
    changepass='http://localhost:3000/schangepass';
    streamapi='http://localhost:3000/tstream';

    getMydata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.profileapi}/${ids}`)
  }

  uploadHodProfile(data:any): Observable<any> 
  {
    return this.client.post(`${this.hodApi}/profilePhoto`, data)
  }

  getMyTeachersdata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.teachersapi}/${ids}`)
  }

  changePassword(data:any,id:any): Observable<any> 
  {
    let ids=id
    return this.client.put(`${this.changepass}/${ids}`,data)
  }

  submitAssignment(data:any): Observable<any> 
  {
    return this.client.post(`${this.submitassapi}`,data)
  }

  getComplaintCategory(): Observable<any> 
  {
    return this.client.get(`${this.complaintcategoryapi}`)
  }

  getHoddata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.thodapi}/${ids}`)
  }
  getClassteacher(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.teacherapi}/${ids}`)
  }
  getMyComplaints(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.complaintapi}/${ids}`)
  }
  getSemesterData(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.semesterapi}/${ids}`)
  }
  getSubjects(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.subjectapi}/${ids}`)
  }
  getStreamdata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.streamapi}/${ids}`)
  }

  getClassworkata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.assignmentapi}/${ids}`)
  }

  getAssignments(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.singleassignment}/${ids}`)
  }

  getNotes(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.notesapi}/${ids}`)
  }

  getplacedata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.placeapi}/${ids}`)
  }

  createComplaint(data:any): Observable<any> 
  {
    return this.client.post(`${this.complaintapi}`,data)
  }

  updateProfiledata(data:any,id:any): Observable<any> 
  {
    let ids=id
    return this.client.put(`${this.profileapi}/${ids}`,data)
  }

  getDistrictdata(): Observable<any> 
  {
    return this.client.get(`${this.distapi}`)
  }
}
