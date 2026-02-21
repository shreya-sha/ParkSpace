import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpaces } from './search-spaces';

describe('SearchSpaces', () => {
  let component: SearchSpaces;
  let fixture: ComponentFixture<SearchSpaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSpaces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSpaces);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
