import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      fullname: ['', Validators.required]
    })
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get fullname() { return this.form.get('fullname'); }


  save() {
    console.log(this.form.value);
    this.authService.signup(this.form.value).subscribe(
      (res) => {
        console.log(res);

      }
    )

  }
}
