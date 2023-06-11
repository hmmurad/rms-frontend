export interface Teacher {
    id?: number;
    fullname: string;
    email: string,
    mobile: string,
    address: string,
    gender: string,
    status: string,
    dob: string,
    departmentId: number,
    classId: number,
    createdAt?: Date
}
