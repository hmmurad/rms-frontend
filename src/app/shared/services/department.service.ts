import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {
    url = 'http://localhost:3000/departments'

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Department[]>(`${this.url}`)
    }

    getById(id: number): Observable<Department> {
        return this.http.get<Department>(`${this.url}/` + id)
    }

    create(data: Department) {
        return this.http.post(`${this.url}`, data)
    }

    update(id: number, data: Department) {
        return this.http.patch(`${this.url}/${id}`, data)
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/${id}`)
    }


}
