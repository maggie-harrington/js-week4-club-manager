import { Injectable } from '@angular/core';
import { MemberProfile } from './member-profile.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberProfileService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  addMember(newMember: MemberProfile) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string) {
    return this.angularFire.database.object('members/' + memberId);
  }

  updateMember(localUpdatedMember){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({name: localUpdatedMember.name,
                                  dateJoined: localUpdatedMember.dateJoined,
                                  transportationStatus: localUpdatedMember.transportationStatus,
                                  additionalInfo: localUpdatedMember.additionalInfo});
  }

  deleteMember(localMemberToDelete){
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }
}
