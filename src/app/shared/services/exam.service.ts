import { ObserversModule } from "@angular/cdk/observers";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ExamService {

    url = 'http://localhost:3000/exams'

    constructor(private http: HttpClient) { }



    getAll(): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}`)
    }

    get(id: number) {
        return this.http.get(`${this.url}/` + id)
    }

    create(exam: any) {
        return this.http.post(`${this.url}`, exam)
    }

    update(id: number, exam: any) {
        return this.http.patch(`${this.url}/id`, exam)
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/` + id)
    }
}