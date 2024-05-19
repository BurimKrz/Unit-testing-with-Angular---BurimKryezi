import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from '../../component/button/button.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ContactComponent,
        ButtonComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable the submit button when the form is invalid', () => {
    const submitButton = fixture.debugElement.query(By.css('app-button button')).nativeElement;
    expect(submitButton.disabled).toBeTrue();
  });

  it('should enable the submit button when the form is valid', () => {
    component.contactForm.controls['name'].setValue('John Doe');
    component.contactForm.controls['email'].setValue('john.doe@example.com');
    component.contactForm.controls['phone'].setValue('1234567890');
    component.contactForm.controls['comment'].setValue('This is a comment');
    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(By.css('app-button button')).nativeElement;
    expect(submitButton.disabled).toBeFalse();
  });
});
