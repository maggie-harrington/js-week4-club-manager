import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MemberProfile } from '../member-profile.model';
import { MemberProfileService } from '../member-profile.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberProfileService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberProfileService) { }

  ngOnInit() {
  }

  submitForm(name: string, dateJoined: string, transportationStatus: string, additionalInfo:string) {
    var newMember: MemberProfile = new MemberProfile(name, dateJoined, transportationStatus, additionalInfo);
    this.memberService.addMember(newMember);
  }
}
