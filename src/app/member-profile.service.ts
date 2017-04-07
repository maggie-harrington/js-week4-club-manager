import { Injectable } from '@angular/core';
import { MemberProfile } from './member-profile.model';

@Injectable()
export class MemberProfileService {
  members: MemberProfile[];

  constructor() { }

  getMembers() {
    return members;
  }

}
