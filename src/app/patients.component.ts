import { Component } from '@angular/core';
import { PatientsService } from './patients.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector:'patients',
  template: `
  <h2>{{title}}</h2>
  <div style="margin:15px;">
  <a href="#"><button type="button" class="btn btn-info btn-lg" (click)="AddPatient()">New Patient</button></a>
  </div>
  <table id="mytable" class="table table-bordred table-striped">
     <thead>
        <th>Name</th>
        <th>File Number</th>
        <th>Nationality</th>
        <th>Birthdate</th>
        <th>VIP</th>
        <th>Edit</th>
        <th>Delete</th>
     </thead>
     <tbody>
        <tr *ngFor="let patient of patients">
          <td>{{ patient.name }}</td>
          <td>{{ patient.fileNo }}</td>
          <td>{{ patient.natinality }}</td>
          <td>{{ patient.birthdate }}</td>
          <td>{{ patient.VIP?"Yes":"No" }}</td>
          <td><button class="btn btn-primary">Edit</button></td>
          <td><button class="btn btn-danger" (click)="deletePatient(patient)">delete</button></td>
        </tr>
      </tbody></table>
  `,
})
export class PatientsComponent{
        title = "List of Patients";
        isActive = true;
        patients : any[];

        constructor(private http: Http, private router: Router){
          let result = http.get("https://localhost:44375/api/ManteqApi").subscribe(response => {
            this.patients = response.json();
            //console.log( response.json());
          });
        }

        deletePatient(patient){
          if(confirm('Are you sure you want to delete this patient?'))
          this.http.delete("https://localhost:44375/api/ManteqApi/" + patient.id).subscribe(response=>{
            this.patients.splice(this.patients.indexOf(patient),1);
          });
        }

        AddPatient(){
          this.router.navigate(['add-patient']);
        }
}
