import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First_Demo_App';
  count = 0

  Counter(val: String) {
    if (val == 'plus') {
      this.count = this.count + 1
    }
    else if (val == 'minus') {
      if (this.count == 0) {
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
