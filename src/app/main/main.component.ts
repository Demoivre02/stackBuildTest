import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor (private getService : UserService){}

  search = new FormControl('')


  usersArray: unknown[] = [];
  isLoading! : boolean
  showToast: boolean = false;
  startSlice : number = 0;
  endSlice : number = 5;


  prev() {
    this.startSlice = Math.max(0, this.startSlice - 5);
    this.endSlice = Math.min(5, this.endSlice - 5);
  }

  next() {
    this.startSlice = Math.min(10, this.startSlice + 5);
    this.endSlice = Math.max(5, this.endSlice + 5);
  }



  onChange() {
    const searchTerm = this.search.value?.toLocaleLowerCase()

    if (searchTerm) {
      // Filter the usersArray based on the search term
      this.usersArray = this.usersArray.filter((user: any) => {
        const userName = (user['name']['firstname'] + ' ' + user['name']['lastname']).toLowerCase();
        return userName.includes(searchTerm);
      });
    } else {
      this.ngOnInit();
    }
  }

  ngOnInit(){
    this.isLoading = true
    this.getService.showAllUsers().subscribe((res :unknown[])=>{
      this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 5000);
      this.usersArray = res;
      this.isLoading= false
    })
  }
}
