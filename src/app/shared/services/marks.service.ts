import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MarksService {
    url = 'http://localhost:3000/marks'

    constructor(private http: HttpClient) {

    }

    getAll(examId?: any, classId?: any): Observable<any> {
        // const params = new HttpParams().set('exam', examId).set('class', classId)
        return this.http.get(`${this.url}`)
    }

    create(marks: any): Observable<any> {
        return this.http.post(`${this.url}`, marks)
    }

    getAllById(studentId: any) {
        return this.http.get(`${this.url}/` + studentId)
    }

    getOneById(studentId: any) {
        return this.http.get(`${this.url}/` + 'student' + '/' + studentId)
    }

    getMarksByStudentId(studentId: any): Observable<any[]> {
        const params = new HttpParams().set('student', studentId)
        return this.http.get<any[]>(`${this.url}`, { params })
    }
    getMarksBySubjectId(subjectId: any): Observable<any[]> {
        const params = new HttpParams().set('subject', subjectId)
        return this.http.get<any[]>(`${this.url}`, { params })
    }
    getMarksByClassId(classId: any) {
        const params = new HttpParams().set('class', classId)
        return this.http.get(`${this.url}`, { params })
    }
    getMarksByClassIdAndSubjectId(classId: any, subjectId: any) {
        const params = new HttpParams().set('class', classId).set('subject', subjectId)
        return this.http.get(`${this.url}`, { params })
    }
    getMarksByExamId(examId: any) {
        const params = new HttpParams().set('exam', examId)
        return this.http.get(`${this.url}`, { params })
    }
    getMarksByStudentIdAndClassIdExamId(studentId: any, classId: any, examId: any) {
        const params = new HttpParams().set('student', studentId).set('class', classId).set('exam', examId)
        return this.http.get(`${this.url}`, { params })
    }

}