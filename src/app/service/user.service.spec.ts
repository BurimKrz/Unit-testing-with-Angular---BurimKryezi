import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { MockUserList } from '../mock/user';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the API and return user date', () => {
    const expectedUrl = 'https://jsonplaceholder.typicode.com/users'; 
    service.getUsers().subscribe((data) => {
      console.log(data); 
      expect(data).toEqual(MockUserList);
    });
    const req: TestRequest = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    
    req.flush(MockUserList);
  });
});
