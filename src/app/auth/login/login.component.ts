
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }


  save() {
    this.authService.signin(this.form.value).subscribe(
      (res) => {
        console.log(res);
        if (res) {
          this.router.navigate(['/dashboard'])
        }

      },
      err => {
        console.log(err);

      }
    )
  }
}
