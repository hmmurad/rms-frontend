import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    url = 'http://localhost:3000/students'

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Student[]>(`${this.url}`)
    }

    getById(id: number): Observable<Student> {
        return this.http.get<Student>(`${this.url}/` + id)
    }

    getStdByClassId(classId?: any): Observable<Student> {
        const params = new HttpParams().set('class', classId)
        return this.http.get<Student>(`${this.url}`, { params })
    }

    create(data: Student) {
        return this.http.post(`${this.url}`, data)
    }

    update(id: number, data: Student) {
        return this.http.patch(`${this.url}/${id}`, data)
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/${id}`)
    }


}
