import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})

export class UserInfoComponent {
  title = 'First_Demo_App';
  count = 0

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
