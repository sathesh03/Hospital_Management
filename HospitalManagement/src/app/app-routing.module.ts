import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientListDetailComponent } from './patient-list-detail/patient-list-detail.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'',component:PatientListComponent},
  {path:'listDetail',component:PatientListDetailComponent},
  {path:'register',component:RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
