import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpaceDetails } from './parking-space-details';

describe('ParkingSpaceDetails', () => {
  let component: ParkingSpaceDetails;
  let fixture: ComponentFixture<ParkingSpaceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingSpaceDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingSpaceDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
