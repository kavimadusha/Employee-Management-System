import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponent ],
      imports: [FormsModule,ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Form invalid when empty'), () => {
  expect(component.createEmp.valid).toBeFalsy();
  }

  it('Test a Form Group Element Count'), () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#createEmp');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(6);
  }
});
