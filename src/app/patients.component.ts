import { Component } from '@angular/core';
import { PatientsService } from './patients.service';

@Component({
  selector:'patients',
  template: `
  <h2>{{title}}</h2>
  <ul><li *ngFor="let patient of patients">{{ patient.Name }}</li></ul>
  <button class="btn btn-primary" [class.active]="isActive" (click) = "onClickSave()">Click Me</button>
  `,
})
export class PatientsComponent{
        title = "List of Patients";
        isActive = true;
        patients;

        constructor(service: PatientsService){
          this.patients = service.getPatients();
        }

        onClickSave($e){
          $e.stopPropagation();
          this.isActive = !this.isActive;
        }
}
