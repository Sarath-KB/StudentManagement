import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminNavigationComponent } from './Admin/admin-navigation/admin-navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DistrictComponent } from './Admin/district/district.component'
import { DistrictDetailsComponent } from './Admin/district-details/district-details.component';
import { PlaceDetailsComponent } from './Admin/place-details/place-details.component';
import { PlaceComponent } from './Admin/place/place.component';
import { DesignationDetailsComponent } from './Admin/designation-details/designation-details.component';
import { DesignationComponent } from './Admin/designation/designation.component';
import { DepartmentDetailsComponent } from './Admin/department-details/department-details.component';
import { DepartmentComponent } from './Admin/department/department.component';
import { FacultyDetailsComponent } from './Admin/faculty-details/faculty-details.component';
import { FacultyComponent } from './Admin/faculty/faculty.component';
import { CoursetypeDetailsComponent } from './Admin/coursetype-details/coursetype-details.component';
import { CoursetypeComponent } from './Admin/coursetype/coursetype.component';
import { CourseDetailsComponent } from './Admin/course-details/course-details.component';
import { CourseComponent } from './Admin/course/course.component';
import { BatchDetailsComponent } from './Admin/batch-details/batch-details.component';
import { BatchComponent } from './Admin/batch/batch.component';
import { StudentDetailsComponent } from './Admin/student-details/student-details.component';
import { StudentComponent } from './Admin/student/student.component';
import { SemesterDetailsComponent } from './Admin/semester-details/semester-details.component';
import { SemesterComponent } from './Admin/semester/semester.component';
import { HomeComponent } from './Admin/home/home.component';
import { BatchEditComponent } from './Admin/batch-edit/batch-edit.component';
import { DistrictEditComponent } from './Admin/district-edit/district-edit.component';
import { DepartmentEditComponent } from './Admin/department-edit/department-edit.component';
import { PlaceEditComponent } from './Admin/place-edit/place-edit.component';
import { FacultyEditComponent } from './Admin/faculty-edit/faculty-edit.component';
import { FacultyViewMoreComponent } from './Admin/faculty-view-more/faculty-view-more.component';
import { CourseEditComponent } from './Admin/course-edit/course-edit.component';
import { SemesterEditComponent } from './Admin/semester-edit/semester-edit.component';
import { StudentEditComponent } from './Admin/student-edit/student-edit.component';
import { StudentViewMoreComponent } from './Admin/student-view-more/student-view-more.component';
import { StudentVerifyComponent } from './Admin/student-verify/student-verify.component';
import { FacultyVerifyComponent } from './Admin/faculty-verify/faculty-verify.component';
import { FacultyVerifyDetailsComponent } from './Admin/faculty-verify-details/faculty-verify-details.component';
import { StudentVerifyDetailsComponent } from './Admin/student-verify-details/student-verify-details.component';
import { GuestNavbarComponent } from './Guest/guest-navbar/guest-navbar.component';
import { UsersLoginComponent } from './Guest/users-login/users-login.component';
import { GuestHomeComponent } from './Guest/guest-home/guest-home.component';
import { ContactComponent } from './Guest/contact/contact.component';
import { FacultyLoginComponent } from './Guest/faculty-login/faculty-login.component';
import { AdminLoginComponent } from './Guest/admin-login/admin-login.component';
import { AboutComponent } from './Guest/about/about.component';
import { HodNavbarComponent } from './HOD/hod-navbar/hod-navbar.component';
import { ClassDetailsComponent } from './HOD/class-details/class-details.component';
import { ClassComponent } from './HOD/class/class.component';
import { SubjectDetailsComponent } from './HOD/subject-details/subject-details.component';
import { SubjectComponent } from './HOD/subject/subject.component';
import { ClassEditComponent } from './HOD/class-edit/class-edit.component';
import { HODhomeComponent } from './HOD/hodhome/hodhome.component';
import { HProfileComponent } from './HOD/hprofile/hprofile.component';
import { EditHProfileComponent } from './HOD/edit-hprofile/edit-hprofile.component';
import { HFacultyDetailsComponent } from './HOD/hfaculty-details/hfaculty-details.component';
import { HStudentDetailsComponent } from './HOD/hstudent-details/hstudent-details.component';
import { HFacultyComponent } from './HOD/hfaculty/hfaculty.component';
import { HStudentComponent } from './HOD/hstudent/hstudent.component';
import { HViewComplaintsComponent } from './HOD/hview-complaints/hview-complaints.component';
import { HRegisterComplaintsComponent } from './HOD/hregister-complaints/hregister-complaints.component';
import { HComplaintsComponent } from './HOD/hcomplaints/hcomplaints.component';
import { HComplaintRenspondComponent } from './HOD/hcomplaint-renspond/hcomplaint-renspond.component';
import { TeacherNavbarComponent } from './Teacher/teacher-navbar/teacher-navbar.component';
import { TeacherHomeComponent } from './Teacher/teacher-home/teacher-home.component';
import { TeacherProfileComponent } from './Teacher/teacher-profile/teacher-profile.component';
import { TeacherEditProfileComponent } from './Teacher/teacher-edit-profile/teacher-edit-profile.component';
import { TeacherClassComponent } from './Teacher/teacher-class/teacher-class.component';
import { TeacherStreamComponent } from './Teacher/teacher-stream/teacher-stream.component';
import { TeacherClassworkComponent } from './Teacher/teacher-classwork/teacher-classwork.component';
import { SubjectEditComponent } from './HOD/subject-edit/subject-edit.component';
import { TeacherClassStudentsComponent } from './Teacher/teacher-class-students/teacher-class-students.component';
import { TeacherNotesRegistrationComponent } from './Teacher/teacher-notes-registration/teacher-notes-registration.component';
import { TeacherViewNotesComponent } from './Teacher/teacher-view-notes/teacher-view-notes.component';
import { TeacherEditNotesComponent } from './Teacher/teacher-edit-notes/teacher-edit-notes.component';
import { StudentNavbarComponent } from './Student/student-navbar/student-navbar.component';
import { StudentHomeComponent } from './Student/student-home/student-home.component';
import { StudentProfileComponent } from './Student/student-profile/student-profile.component';
import { StudentProfileEditComponent } from './Student/student-profile-edit/student-profile-edit.component';
import { StudentChangePasswordComponent } from './Student/student-change-password/student-change-password.component';
import { StudentSemesterComponent } from './Student/student-semester/student-semester.component';
import { StudentStreamComponent } from './Student/student-stream/student-stream.component';
import { StudentStreamViewComponent } from './Student/student-stream-view/student-stream-view.component';
import { StudentClassworkComponent } from './Student/student-classwork/student-classwork.component';
import { StudentMyComplaintsComponent } from './Student/student-my-complaints/student-my-complaints.component';
import { StudentRegisterComplaintComponent } from './Student/student-register-complaint/student-register-complaint.component';
import { StudentSubmitClassworkComponent } from './Student/student-submit-classwork/student-submit-classwork.component';
import { StudentMyTeachersComponent } from './Student/student-my-teachers/student-my-teachers.component';
import { TeacherClassworkDetailsComponent } from './Teacher/teacher-classwork-details/teacher-classwork-details.component';
import { TeacherMyComplaintsComponent } from './Teacher/teacher-my-complaints/teacher-my-complaints.component';
import { TeacherViewStudentComponent } from './Teacher/teacher-view-student/teacher-view-student.component';
import { TeacherStudentDetailsComponent } from './Teacher/teacher-student-details/teacher-student-details.component';
import { TeacherRegisterComplaintComponent } from './Teacher/teacher-register-complaint/teacher-register-complaint.component';
import { TeacherComplaintsViewComponent } from './Teacher/teacher-complaints-view/teacher-complaints-view.component';
import { TeacherComplaintRespondComponent } from './Teacher/teacher-complaint-respond/teacher-complaint-respond.component';
import { TeacherChangePasswordComponent } from './Teacher/teacher-change-password/teacher-change-password.component';
import { HODChangePasswordComponent } from './HOD/hodchange-password/hodchange-password.component';
import { AdminProfileComponent } from './Admin/admin-profile/admin-profile.component';
import { AdminComplaintViewComponent } from './Admin/admin-complaint-view/admin-complaint-view.component';
import { AdminEditProfileComponent } from './Admin/admin-edit-profile/admin-edit-profile.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminServiceService } from './Admin/admin-service.service';
import {ToastrModule} from 'ngx-toastr';
import {FileUploadModule} from 'ng2-file-upload'
import { DatePipe } from '@angular/common';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { TeacherRegisterClassworkComponent } from './Teacher/teacher-register-classwork/teacher-register-classwork.component';
import { AdminChangePasswordComponent } from './Admin/admin-change-password/admin-change-password.component';
import { AdminComplaintsComponent } from './Admin/admin-complaints/admin-complaints.component';
import { HodReportComponent } from './HOD/hod-report/hod-report.component';
import { AdminReportComponent } from './Admin/admin-report/admin-report.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminNavigationComponent,
    DistrictDetailsComponent,
    DistrictComponent,
    PlaceDetailsComponent,
    PlaceComponent,
    DesignationDetailsComponent,
    DesignationComponent,
    DepartmentDetailsComponent,
    DepartmentComponent,
    FacultyDetailsComponent,
    FacultyComponent,
    CoursetypeDetailsComponent,
    CoursetypeComponent,
    CourseDetailsComponent,
    CourseComponent,
    BatchDetailsComponent,
    BatchComponent,
    StudentDetailsComponent,
    StudentComponent,
    SemesterDetailsComponent,
    SemesterComponent,
    HomeComponent,
    BatchEditComponent,
    DistrictEditComponent,
    DepartmentEditComponent,
    PlaceEditComponent,
    FacultyEditComponent,
    FacultyViewMoreComponent,
    CourseEditComponent,
    SemesterEditComponent,
    StudentEditComponent,
    StudentViewMoreComponent,
    StudentVerifyComponent,
    FacultyVerifyComponent,
    FacultyVerifyDetailsComponent,
    StudentVerifyDetailsComponent,
    GuestNavbarComponent,
    UsersLoginComponent,
    GuestHomeComponent,
    ContactComponent,
    FacultyLoginComponent,
    AdminComplaintViewComponent,
    AdminLoginComponent,
    AboutComponent,
    HodNavbarComponent,
    ClassDetailsComponent,
    ClassComponent,
    SubjectDetailsComponent,
    SubjectComponent,
    ClassEditComponent,
    HProfileComponent,
    EditHProfileComponent,
    HFacultyDetailsComponent,
    HStudentDetailsComponent,
    HFacultyComponent,
    HStudentComponent,
    HViewComplaintsComponent,
    HRegisterComplaintsComponent,
    HComplaintsComponent,
    HComplaintRenspondComponent,
    TeacherNavbarComponent,
    TeacherHomeComponent,
    TeacherProfileComponent,
    TeacherEditProfileComponent,
    TeacherClassComponent,
    TeacherStreamComponent,
    TeacherClassworkComponent,
    SubjectEditComponent,
    HODhomeComponent,
    TeacherClassStudentsComponent,
    TeacherNotesRegistrationComponent,
    TeacherViewNotesComponent,
    TeacherEditNotesComponent,
    StudentNavbarComponent,
    StudentHomeComponent,
    StudentProfileComponent,
    StudentProfileEditComponent,
    StudentChangePasswordComponent,
    StudentSemesterComponent,
    StudentStreamComponent,
    StudentStreamViewComponent,
    StudentClassworkComponent,
    StudentMyComplaintsComponent,
    StudentRegisterComplaintComponent,
    StudentSubmitClassworkComponent,
    StudentMyTeachersComponent,
    TeacherClassworkDetailsComponent,
    TeacherMyComplaintsComponent,
    TeacherViewStudentComponent,
    TeacherStudentDetailsComponent,
    TeacherRegisterComplaintComponent,
    TeacherComplaintsViewComponent,
    TeacherComplaintRespondComponent,
    TeacherChangePasswordComponent,
    HODChangePasswordComponent,
    AdminProfileComponent,
    AdminEditProfileComponent,
    AddAdminComponent,
    TeacherRegisterClassworkComponent,
    AdminChangePasswordComponent,
    AdminComplaintsComponent,
    HodReportComponent,
    AdminReportComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DistrictComponent,DistrictDetailsComponent,AdminServiceService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
