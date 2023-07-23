import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from '../models/class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }


  create(data: Class) {
    return this.http.post<Class>(`http://localhost:3000/classes`, data)
  }


  getAll() {
    // headers = new HttpHeaders().set()
    return this.http.get<Class[]>(`http://localhost:3000/classes`)
  }

  getClassById(id: number): Observable<Class> {
    return this.http.get<Class>(`http://localhost:3000/classes/${id}`)
  }

  getClassByDepartment(id: number): Observable<Class[]> {
    const params = new HttpParams().set('department', id)
    return this.http.get<Class[]>(`http://localhost:3000/classes`, { params })
  }



  update(id: number, data: Class) {
    return this.http.patch(`http://localhost:3000/classes/${id}`, data)
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/classes/${id}`)
  }


}
