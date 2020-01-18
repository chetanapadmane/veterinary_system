import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HospitalProfileComponent } from './hospital-profile/hospital-profile.component';
import { AnimalDetailsFormComponent } from './animal-details-form/animal-details-form.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'hospital-profile', component: HospitalProfileComponent },
  { path: 'animal-details', component: AnimalDetailsFormComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
