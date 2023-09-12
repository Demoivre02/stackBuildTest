import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor (private getService : UserService){}

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
