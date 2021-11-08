import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  emp: any[] = [];
  editEmp: FormGroup;
  submitted = false;
  id: any;
  response: any;
  constructor(private _empService: EmpService,
              private fb: FormBuilder,
              private router: Router) {
    this.editEmp = this.fb.group({
    EmpId:['', Validators.required],
    EmpName:['', Validators.required],
    EmpCno:['', Validators.required],
    EmpAdd:['', Validators.required],
    EmpMail:['', Validators.required],
    Sexuality:['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.getEmp()
  }
  getEmp(){
    this._empService.getEmp().subscribe(data => {
      this.emp = [];
      data.forEach((eliment:any) => {
        this.emp.push({
          id: eliment.payload.doc.id,
          ...eliment.payload.doc.data()
        })
      });
      console.log(this.emp);
    })
  }
  Emp(id: string){
    this._empService.Emp(id).subscribe( data =>{
      console.log(id);
      this.editEmp.setValue({
        EmpId: data.payload.data()['EmpId'],
        EmpName: data.payload.data()['EmpName'],
        EmpCno: data.payload.data()['EmpCno'],
        EmpAdd: data.payload.data()['EmpAdd'],
        EmpMail: data.payload.data()['EmpMail'],
        Sexuality: data.payload.data()['Sexuality']
      })
    })
    this.id=id;
  }
 upEmp(){
    this.submitted = true;
    const emp: any = {
      EmpId: this.editEmp.value.EmpId,
      EmpName: this.editEmp.value.EmpName,
      EmpCno: this.editEmp.value.EmpCno,
      EmpAdd: this.editEmp.value.EmpAdd,
      EmpMail: this.editEmp.value.EmpMail,
      Sexuality: this.editEmp.value.Sexuality
    }
    this._empService.editEmp(this.id, emp).then(()=>{
      alert('Employee Deatails Updated Succsessfully!');
      this.router.navigate(['/view'])
    }).catch(error => {
      console.log(error);
    })
}
delEmp(id: string){
    this.response=confirm("Are You Sure you want to delete this Employee Deatails?");
    if(this.response == true){
      this._empService.delEmp(id).then(() => {
        alert("Deleted Employee Deatails Succsessfully");
      }).catch(error => {
        console.log(error)
      })
    }
    else{
      alert("Cancelled Deletion Employee Deatails Succsessfully");
    }
  }
}
