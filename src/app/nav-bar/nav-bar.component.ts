import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
    StudentForm : FormGroup = new FormGroup({
      password: new FormControl("",[Validators.maxLength(8),Validators.required,Validators.minLength(4)]),
      email: new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
      city: new FormControl(),
      zip: new FormControl(),
      isAcceptTerms: new FormControl()
    });
    formValue: any;
    onSave() {
      this.formValue = this.StudentForm.value;
    }
    
}
