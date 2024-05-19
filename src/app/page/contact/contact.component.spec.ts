import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';
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

    // single tesing components
  it('should render name input', () => {
    const nameInput = fixture.debugElement.query(By.css('input[formControlName="name"]'));
    expect(nameInput).toBeTruthy();
  });

  it('should render email input', () => {
    const emailInput = fixture.debugElement.query(By.css('input[formControlName="email"]'));
    expect(emailInput).toBeTruthy();
  });

  it('should render phone input', () => {
    const phoneInput = fixture.debugElement.query(By.css('input[formControlName="phone"]'));
    expect(phoneInput).toBeTruthy();
  });

  it('should render comment textarea', () => {
    const commentTextarea = fixture.debugElement.query(By.css('textarea[formControlName="comment"]'));
    expect(commentTextarea).toBeTruthy();
  });
});
