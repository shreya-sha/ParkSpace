import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerListings } from './owner-listings';

describe('OwnerListings', () => {
  let component: OwnerListings;
  let fixture: ComponentFixture<OwnerListings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerListings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerListings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
