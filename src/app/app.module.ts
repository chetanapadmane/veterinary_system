import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpServices } from './http.service';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HospitalProfileComponent } from './hospital-profile/hospital-profile.component';
import { AnimalDetailsFormComponent } from './animal-details-form/animal-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HospitalProfileComponent,
    AnimalDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
