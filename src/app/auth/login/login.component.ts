
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { UserStoreService } from '../user.store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastrService,
    private userStoreService: UserStoreService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })

    if (this.authService.getToken()) {
      this.router.navigate(['/dashboard'])
    }
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }


  save() {
    if (this.form.valid) {
      this.authService.signin(this.form.value).subscribe(
        (res) => {
          if (res) {
            console.log(res);
            this.form.reset()
            this.toastService.success('Successfully Login', 'Login')
            // get return url from query parameters or default to home page
            // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            setInterval(() => {

              this.router.navigate(['/dashboard']);
            }, 500)
          }
        },
        err => {
          this.toastService.error(err.error.message, err.error.error)
        }
      )
    }

  }


}
