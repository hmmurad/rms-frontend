import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ExamService {

    url = 'http://localhost:3000/exams'

    constructor(private http: HttpClient) { }



    getAll() {
        return this.http.get(`${this.url}`)
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