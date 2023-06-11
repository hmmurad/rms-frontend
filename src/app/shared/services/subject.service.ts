import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../models/subject';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    url = 'http://localhost:3000/subject'

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Subject[]>(`${this.url}`)
    }

    getSubjectById(id: number): Observable<Subject> {
        return this.http.get<Subject>(`${this.url}/` + id)
    }

    create(data: Subject) {
        return this.http.post(`${this.url}`, data)
    }

    update(id: number, data: Subject) {
        return this.http.patch(`${this.url}/${id}`, data)
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/${id}`)
    }


}
