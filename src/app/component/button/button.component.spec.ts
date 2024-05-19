import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render correct variant', () => {
    component.variant = 'success';

    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    const classList = buttonElement.nativeElement.classList;

    console.log('Class list:', classList);

    expect(classList).toContain('bg-success-500');
    expect(classList).toContain('hover:bg-success-800');
  });

  it('should render correct content in button', () => {
    // Set the component input
    component.variant = 'success';
    component.type = 'submit';

    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

    const projectedContent = buttonElement.textContent.trim();

    // ??????????????
    // console.log('Projected Button Conent:', projectedContent);

    // Expect the projected content to match the expected value
    expect(projectedContent).toBe('');
  });



});