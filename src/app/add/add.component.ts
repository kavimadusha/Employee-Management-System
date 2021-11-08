import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  createEmp: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
              private _empService: EmpService,
              private router: Router) {
    this.createEmp = this.fb.group({
      EmpId:['', Validators.required],
      EmpName:['', Validators.required],
      EmpCno:['', Validators.required],
      EmpAdd:['', Validators.required],
      EmpMail:['', Validators.required],
      Sexuality:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addEmp(){
    this.submitted = true;

    if(this.createEmp.invalid){
      return;
    }
    const emp: any = {
      EmpId: this.createEmp.value.EmpId,
      EmpName: this.createEmp.value.EmpName,
      EmpCno: this.createEmp.value.EmpCno,
      EmpAdd: this.createEmp.value.EmpAdd,
      EmpMail: this.createEmp.value.EmpMail,
      Sexuality: this.createEmp.value.Sexuality,
      dateCreation: new Date(),
      dateActualization: new Date()
    }
    this._empService.addEmp(emp).then(()=>{
      alert('Employee Registration Succsess!');
      this.router.navigate(['/view'])
    }).catch(error => {
      console.log(error);
    })
  }
}
