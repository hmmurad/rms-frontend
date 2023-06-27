import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MarksService {
    url = 'http://localhost:3000/marks'

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<any> {
        return this.http.get(`${this.url}`)
    }
    create(marks: any): Observable<any> {
        return this.http.post(`${this.url}`, marks)
    }

}