import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  emp: any[] = [];

  constructor(private _empService: EmpService) { 
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
}
