import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Http} from "@angular/http";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private http: Http) { }

  addForm: FormGroup;

    ngOnInit() {

      this.addForm = this.formBuilder.group({
        name: ['', Validators.required],
        fileNo: ['', Validators.pattern('[0-9]*')],
        citizenId: ['', Validators.pattern('[0-9]*')],
        birthdate : ['', Validators.pattern('[0-9]*')],
        gender: ['', Validators.required],
        vip: ['', Validators.required],
        nationality: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        email: ['', Validators.required],
        country: ['', Validators.required],
        city: ['', Validators.required],
        street: ['', Validators.required],
        Address1: ['', Validators.required],
        Address2: ['', Validators.required],
        ContactPerson: ['', Validators.required],
        ContactRelation: ['', Validators.required],
        ContactPhone: ['', Validators.required],
        Photo: ['', Validators.required],
        FirstVisitDate: ['', Validators.required],
      });

    }

    onSubmit() {
      this.http.post("https://localhost:44375/api/ManteqApi", this.addForm.value).subscribe(
        data => {
          //this.router.navigate(['']);
        });
    }

  }
