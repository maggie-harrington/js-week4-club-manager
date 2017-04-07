import { TestBed, inject } from '@angular/core/testing';

import { MemberProfileService } from './member-profile.service';

describe('MemberProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberProfileService]
    });
  });

  it('should ...', inject([MemberProfileService], (service: MemberProfileService) => {
    expect(service).toBeTruthy();
  }));
});
