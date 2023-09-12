import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../interface/user';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor( private userService : UserService ){}

  isMenuOpen: boolean = false;
  openForm : boolean = false
  showToast: boolean = false;

  FirstName = new FormControl('')
  LastName = new FormControl('')
  Email = new FormControl('')
  Role=  new FormControl

  params: User = {
    role: this.Role.value,
    email : this.Email.value,
    name: {
      firstname: this.FirstName.value,
      lastname: this.LastName.value
    }
  };

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeForm(){
    this.openForm = false
    this.isMenuOpen = !this.isMenuOpen;``
  }

  delete(){
    this.userService.deletUser()
    this.isMenuOpen = !this.isMenuOpen;
  }

  edit(){
    this.userService.FnEditUser(this.params)
    this.openForm === false ? this.openForm = true : null
  }

  update() {
    this.isMenuOpen = !this.isMenuOpen;
    this.params = {
      role: this.Role.value,
      email: this.Email.value,
      name: {
        firstname: this.FirstName.value,
        lastname: this.LastName.value
      }
    };

    this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 5000);


    this.userService.FnEditUser(this.params).subscribe((res)=>{
      this.FirstName.setValue('');
      this.LastName.setValue('');
      this.Email.setValue('');
      this.Role.setValue('');
    });
    this.openForm = false
  }
}
