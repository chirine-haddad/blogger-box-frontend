import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryService } from './category.service';
import { Category } from '../data/category';

describe('CategoryService', () => {
  let categoryService: CategoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService]
    });

    categoryService = TestBed.inject(CategoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  it('should return categories', () => {
    const mockCategories: Category[] = [
      { id: 1, name: 'Category A', description: 'Description A' },
      { id: 2, name: 'Category B', description: 'Description B' }
    ];

    categoryService.getCategories().subscribe(categories => {
      expect(categories).toBeTruthy();
      expect(categories.length).toBe(2);
      expect(categories).toEqual(mockCategories);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/categories'); // Assurez-vous que l'URL est correcte
    expect(req.request.method).toBe('GET');
    req.flush(mockCategories);
  });
});
