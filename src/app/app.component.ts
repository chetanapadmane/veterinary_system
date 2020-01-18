import { Component, OnInit } from '@angular/core';
import { HttpServices } from './http.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  data;

  constructor(private http: HttpServices) {

  }

  displayName() {
    console.log(this.name);
    this.http.sendData(this.name).subscribe(response => {
      console.log(response);
    }, err => {
      console.error(err);
    });
  }

  getData() {
    this.http.getData()
    .subscribe(response => {
      this.data = response;
      // console.log('data');
      // console.log(response);
    });
  }

}
