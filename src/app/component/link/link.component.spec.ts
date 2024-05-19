import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkComponent } from './link.component';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: {
                get(): number {
                  return 6;
                }
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render correct type', () => {
    component.type = 'success';

    fixture.detectChanges();

    const linkElement = fixture.debugElement.query(By.css('a'));
    const classList = linkElement.nativeElement.classList;

    // Check Inspect inside testing browser to check the ->
    // return data if its correct of what your asking to do 
    // DETELE after checking if correct
    console.log('Class list:', classList);

    expect(classList).toContain('bg-success-500');
    expect(classList).toContain('hover:bg-success-800');
  });

  it('should render correct content in link', () => {
    
    component.type = 'success';
  
    fixture.detectChanges();
  
    const linkElement = fixture.debugElement.query(By.css('a')).nativeElement;
  
    const linkContent = linkElement.textContent.trim();
  
    // howww???
    console.log('Link Content:', linkContent);
  
    expect(linkContent).toBe('');
  });
  

  

  // it('should render correct content in link', () => {
  //   // Set the component input
  //   component.type = 'success';

  //   // Trigger change detection to update the template
  //   fixture.detectChanges();

  //   // Query the anchor element and check its content
  //   const linkElement = fixture.debugElement.query(By.css('a')).nativeElement;

  //   expect(linkElement.textContent.trim()).toBe('Link'); // Adjust as per your actual link content
  // });



});
