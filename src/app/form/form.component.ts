import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  openForm: boolean = false;
  showSpinner: boolean = false;
  userForm!: FormGroup;
  showToast: boolean = false;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]]
    });
  }

  handleOpening() {
    this.openForm = !this.openForm;
  }

  closeForm() {
    this.openForm = false;
  }

  makepost() {
    if (this.userForm.invalid) {
      return;
    }

    this.showSpinner = true;

    const params: User = {
      role: this.userForm.value.role,
      email: this.userForm.value.email,
      name: {
        firstname: this.userForm.value.firstName,
        lastname: this.userForm.value.lastName
      }
    };

    this.userService.createUser(params).subscribe(
      (res) => {
        this.showSpinner = false;

        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 5000);

        if (res) {
          this.openForm = false;
          this.userForm.reset();
        }
      },
      (error) => {

        this.showSpinner = false;
      }
    );
  }
}
