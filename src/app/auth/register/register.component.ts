import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      fullname: ['', Validators.required]
    })

    if (this.authService.getToken()) {
      this.router.navigate(['/dashboard'])
    }
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get fullname() { return this.form.get('fullname'); }


  save() {
    console.log(this.form.value);
    this.authService.signup(this.form.value).subscribe(
      (res) => {
        this.toastrService.success('Success')
        this.router.navigateByUrl('auth/login')
      },
      (err) => {
        this.toastrService.error(err.error.message)
        console.log(err.error.message);

      }
    )

  }
}
