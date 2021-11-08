import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EmpService{
    constructor(private firestore: AngularFirestore){ }

    addEmp(emp: any): Promise<any>{
        return this.firestore.collection('employees').add(emp);
    }

    getEmp(): Observable<any> {
        return this.firestore.collection('employees').snapshotChanges();
    }

    Emp(id: string): Observable<any>{
        return this.firestore.collection("employees").doc(id).snapshotChanges();
    }

    editEmp(id: string, data:any): Promise<any>{
        return this.firestore.collection("employees").doc(id).update(data);
    }

    delEmp(id: string): Promise<any> {
            return this.firestore.collection("employees").doc(id).delete();
        }
}
