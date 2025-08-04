import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './User/user-info/user-info.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, UserInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
