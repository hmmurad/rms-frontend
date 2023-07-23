import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    url = 'http://localhost:3000/users'

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${this.url}`)
    }

    getById(id: number): Observable<any> {
        return this.http.get<any>(`${this.url}/` + id)
    }

    create(data: any) {
        return this.http.post(`${this.url}`, data)
    }

    update(id: number, data: any) {
        return this.http.patch(`${this.url}/${id}`, data)
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/${id}`)
    }


}
