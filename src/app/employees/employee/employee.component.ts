import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( public service: EmployeeService) { }

  departments : [
    {id:3 , value: "Angular Developer"},
    {id:2 , value: "MEAN Stack Developer"},
    {id:3 , value: "MERN Stack Developer"}];

  ngOnInit(): void {
  }
onClear() {
  this.service.form.reset();
  this.service.initializeFormGroup();
}
submit(form){
  if (form.valid){
    console.log(form.value);
    
  }
}
}
