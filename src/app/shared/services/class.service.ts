import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Class } from '../models/class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get<Class[]>(`http://localhost:3000/class`)
  }

  getClassById(id: number): Observable<Class> {
    return this.http.get<Class>(`http://localhost:3000/class/${id}`)
  }

  create(data: Class) {
    return this.http.post(`http://localhost:3000/class`, data)
  }

  update(id: number, data: Class) {
    return this.http.patch(`http://localhost:3000/class/${id}`, data)
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/class/${id}`)
  }


}
