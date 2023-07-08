import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { MarksService } from "./marks.service";
import { StudentService } from "./student.service";
import { Student } from "../models/student";

@Injectable({
    providedIn: 'root'
})

export class ResultService {

    url = 'http://localhost:3000/marks'

    constructor(private http: HttpClient,
        private marksService: MarksService,
        private studentService: StudentService,
    ) {

    }


    getAll(): Observable<Student[]> {
        return this.http.get<Student[]>(`${this.url}`).pipe(tap(
            res => {
                const std = Array.from(new Set(res.map((item: any) => item.studentId)))
                console.log(std);

                for (let i = 0; i < std.length; i++) {
                    this.studentService.getById(std[i]).subscribe(
                        resData => {
                            console.log(resData);

                        }
                    )
                }


            }
        ))
    }

}