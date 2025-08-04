import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})

export class UserInfoComponent {
  title = 'First_Demo_App';
  count = 0
  UserInfo : any[] = [
    {id: 11, name: 'John Doe', age: 25, gender: 'Male', isActive:true, creditScore:40},
    {id: 12, name: 'Jane Smith', age: 30, gender: 'Female', isActive:false, creditScore:80},
    {id: 13, name: 'Bob Johnson', age: 28, gender: 'Male', isActive:true, creditScore:60}
  ]

  Counter(val: String) {
    if (val == 'plus') {
      this.count = this.count + 1
    }
    else if (val == 'minus') {
      if (this.count == 0 || this.count < 0) {
        alert("Value Is Zero")
      } else {
        this.count = this.count - 1
      }
    }
    else {
      this.count = 0
    }
  }
}
