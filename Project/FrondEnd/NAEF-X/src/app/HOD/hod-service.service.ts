import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HodServiceService {

  constructor(private client:HttpClient) { }

  //Connect Frondend and Backend

  classapi='http://localhost:3000/hclass';
  singleclassapi='http://localhost:3000/hsingleclass';
  batchapi='http://localhost:3000/hbatch';
  facultyapi='http://localhost:3000/hfaculty';
  singlefacultyapi='http://localhost:3000/faculty';
  semesterapi='http://localhost:3000/hsemester';
  subjectapi='http://localhost:3000/hsubject';
  singlesubjectapi='http://localhost:3000/hsinglesubject';
  timetableapi='http://localhost:3000/htimetable';
  hodApi='http://localhost:3000/hod';
  distapi='http://localhost:3000/hdist';
  placeapi='http://localhost:3000/hplace';
  profileapi='http://localhost:3000/hprofile';
  changepassapi='http://localhost:3000/hchangepass';
  studentsapi='http://localhost:3000/hstudents';
  getSingleStudentapi='http://localhost:3000/hsinglestudents';
  tomeComplaintsapi='http://localhost:3000/htomecomplaints';
  complaintstatusapi='http://localhost:3000/hcomplaintstatus';
  mycomplaintsapi='http://localhost:3000/hmycomplaints';
  complaintcategoryapi='http://localhost:3000/ccategory';
  facultyreportapi='http://localhost:3000/scount';
  assignmentreportapi='http://localhost:3000/hasscount';
  

  getClassdata(id:any):Observable<any>
  {
    let ids=id;
	  return this.client.get(`${this.classapi}/${ids}`);
  }

  getComplaintCategory():Observable<any>
  {
	  return this.client.get(`${this.complaintcategoryapi}`);
  }

  getFacultycount(id:any):Observable<any>
  {
    let ids=id;
	  return this.client.get(`${this.facultyreportapi}/${ids}`);
  }

  getAssignmentcount(id:any):Observable<any>
  {
    let ids=id;
	  return this.client.get(`${this.assignmentreportapi}/${ids}`);
  }

  createComplaint(data:any):Observable<any>
  {
	  return this.client.post(`${this.mycomplaintsapi}`,data);
  }

  getSingleComplaintdata(id:any):Observable<any>
  {
    let ids=id;
	  return this.client.get(`${this.complaintstatusapi}/${ids}`);
  }

  getMyComplaints(id:any):Observable<any>
  {
    let ids=id;
	  return this.client.get(`${this.mycomplaintsapi}/${ids}`);
  }

  UpdateComplaintdata(data:any,id:any):Observable<any>
  {
    let ids=id;
	  return this.client.put(`${this.complaintstatusapi}/${ids}`,data);
  }

  getTomeComplaints(id:any):Observable<any>
  {
    let ids=id;
	  return this.client.get(`${this.tomeComplaintsapi}/${ids}`);
  }

  getSingleStudentdata(id:any):Observable<any>
  {
    let ids=id;
	  return this.client.get(`${this.getSingleStudentapi}/${ids}`);
  }

  getDepartmentStudents(id:any):Observable<any>
  {
    let ids=id
    return this.client.get(`${this.studentsapi}/${ids}`);
  }

  createClassdata(data:any):Observable<any>
  {
	  return this.client.post(`${this.classapi}`,data);
  }

  getClasssingledata(id:any):Observable<any>
  {
    let ids=id;
	  return this.client.get(`${this.singleclassapi}/${ids}`);
  }

  updateClassdata(data:any, id:any):Observable<any>
  {
    let ids=id;
	  return this.client.put(`${this.classapi}/${ids}`,data);
  }

  DeleteClass(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.classapi}/${ids}`);
  }

  getBatchdata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.batchapi}/${ids}`);
  }

  getFacultydata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.facultyapi}/${ids}`);
  }

  getSemester(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.semesterapi}/${ids}`);
  }

  createSubjectdata(data:any):Observable<any>
  {
    return this.client.post(`${this.subjectapi}`,data);
  }

  getSubjectdata(id:any):Observable<any>
  {
    let ids=id;
    return this.client.get(`${this.subjectapi}/${ids}`);
  }

  DeleteSubject(id:any):Observable<any>
  {
    let ids=id;
    return this.client.delete(`${this.subjectapi}/${ids}`);
  }

  getSubjectsingledata(id:any):Observable<any>
  {
    let ids=id;
	  return this.client.get(`${this.singlesubjectapi}/${ids}`);
  }

  updateSubjectdata(data:any, id:any):Observable<any>
  {
    let ids=id;
	  return this.client.put(`${this.subjectapi}/${ids}`,data);
  }

  getTimetabledata(id:any):Observable<any>
  {
    let ids = id;
    console.log(ids)
	  return this.client.get(`${this.timetableapi}/${ids}`);
  }

  uploadHodProfile(data:any): Observable<any> 
  {
    return this.client.post(`${this.hodApi}/profilePhoto`, data)
  }

  getDistrictdata(): Observable<any> 
  {
    return this.client.get(`${this.distapi}`)
  }

  getplacedata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.placeapi}/${ids}`)
  }
  updateProfiledata(data:any,id:any): Observable<any> 
  {
    let ids=id
    return this.client.put(`${this.profileapi}/${ids}`,data)
  }
  getMydata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.profileapi}/${ids}`)
  }

  changePassword(data:any,id:any): Observable<any> 
  {
    let ids=id
    return this.client.put(`${this.changepassapi}/${ids}`,data)
  }

  getFacultysingledata(id:any): Observable<any> 
  {
    let ids=id
    return this.client.get(`${this.singlefacultyapi}/${ids}`)
  }
}
