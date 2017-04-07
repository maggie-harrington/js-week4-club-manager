import { Component, OnInit } from '@angular/core';
import { MemberProfile } from '../member-profile.model';
import { MemberProfileService } from '../member-profile.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberProfileService]
})

export class MembersComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private memberProfileService: MemberProfileService) { }

  ngOnInit() {
    this.members = this.memberProfileService.getMembers();
  }

}
