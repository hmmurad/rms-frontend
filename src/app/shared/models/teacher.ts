export interface Teacher {
    id?: number;
    fullname: string;
    email: string,
    mobile: string,
    address: string,
    gender: string,
    status: string,
    doj: Date,
    departmentId: number,
    classId: number,
    createdAt?: Date
}
