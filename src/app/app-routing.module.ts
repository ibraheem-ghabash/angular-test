import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from "./patients.component";
import { PatientAddComponent } from "./patient-add/patient-add.component";
import { PatientEditComponent } from "./patient-edit/patient-edit.component";


const routes: Routes = [
  //{ path: '', redirectTo: 'patients', pathMatch: 'full' },
  //{ path: 'patients', component: PatientsComponent },
  { path: '', component: PatientsComponent },
  { path: 'add-patient', component: PatientAddComponent },
  { path: 'edit-patient', component: PatientEditComponent }
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
