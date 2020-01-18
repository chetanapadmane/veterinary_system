import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpServices {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient) { }

    sendData(data) {
        console.log('fh');
        return this.http.post('http://localhost/api/connect.php', { name: data }, this.httpOptions);
    }

    getData() {
        return this.http.get('http://localhost/api/getData.php', { responseType: 'json'});
    }
}
