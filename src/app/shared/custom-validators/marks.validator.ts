import { FormControl } from "@angular/forms";

export function customAttendance(control: FormControl): { [key: string]: boolean } {
    let val = control.value;
    if (val && val > 10) {
        return {
            isMarks: true
        }
    }
    return {
        isMarks: false
    };
}
export function customTutorial(control: FormControl): { [key: string]: boolean } {
    let val = control.value;
    if (val && val > 20) {
        return {
            isMarks: true
        }
    }
    return {
        isMarks: false
    };
}
export function customWritten(control: FormControl): { [key: string]: boolean } {
    let val = control.value;
    if (val && val > 50) {
        return {
            isMarks: true
        }
    }
    return {
        isMarks: false
    };
}