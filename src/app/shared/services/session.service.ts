import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    url = 'http://localhost:3000/sessions'


    constructor(private http: HttpClient) { }


    getAll(): Observable<{ year: string }[]> {
        return this.http.get<{ year: string }[]>(`${this.url}`)
    }

    get(id: any): Observable<{ year: string }> {
        return this.http.get<{ year: string }>(`${this.url}/${id}`)
    }

    create(year: string): Observable<{ year: string }> {
        return this.http.post<{ year: string }>(`${this.url}`, year)
    }

    update(id: number, data: any) {
        return this.http.patch(`http://localhost:3000/sessions/${id}`, data)
    }

    delete(id: number) {
        return this.http.delete(`http://localhost:3000/sessions/${id}`)
    }

}