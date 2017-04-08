import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MemberProfile } from '../member-profile.model';
import { MemberProfileService } from '../member-profile.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css'],
  providers: [MemberProfileService]
})

export class MemberProfileComponent implements OnInit {
  memberId: string;
  memberToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memberProfileService: MemberProfileService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.memberToDisplay = this.memberProfileService.getMemberById(this.memberId);
  }
}
