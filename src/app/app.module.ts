import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { PatientsComponent } from './patients.component';
import { PatientComponent } from './patient/patient.component';
import { PatientsService } from './patients.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [PatientsService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
