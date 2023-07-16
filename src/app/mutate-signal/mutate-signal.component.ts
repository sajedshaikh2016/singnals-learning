import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mutate-signal',
  templateUrl: './mutate-signal.component.html',
  styleUrls: ['./mutate-signal.component.scss']
})
export class MutateSignalComponent implements OnInit {

  public employeeForm!: FormGroup;
  public employees = signal([
    { name: "Sajed Shaikh", position: "Senior Software Engineer", department: "WPB" },
    { name: "Majed Shaikh", position: "Marketing Managerr", department: "Marketing" },
    { name: "Javed Shaikh", position: "HR Manager", department: "HR" },
  ]);
  public employeeAdd = signal<boolean>(false);

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this._formBuilder.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  public onSubmit() {
    console.log(this.employeeForm.value);
    this.employees.mutate(employeeList => {
      employeeList.push(this.employeeForm.value);
    });
  }

  public toggleAddBlock(): void {
    this.employeeAdd.update(status => !status);
  }


}
