import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore'

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { environment } from 'src/environments/environment';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
   { path: 'edit', component: EditComponent },


  { path: '', redirectTo: '/add', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
