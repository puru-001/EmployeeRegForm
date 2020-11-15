import { Injectable } from '@angular/core';
import {FormGroup , FormControl , Validators} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key : new FormControl(null),
    employeeName : new FormControl('' , Validators.required),
    email : new FormControl('' , Validators.required),
    mobile : new FormControl('' , [Validators.required , Validators.minLength(10)]),
    city : new FormControl('',Validators.required),
    gender : new FormControl(''),
    position : new FormControl(''),
    joining_date: new FormControl(''),
    about : new FormControl('')


  });

  initializeFormGroup() {
    this.form.setValue({
      $key : null,
      employeeName: '',
      email: '',
      mobile: '',
      city: '',
      gender : '',
      position : '',
      joining_date: '',
      about : ''
    })
  }
}
