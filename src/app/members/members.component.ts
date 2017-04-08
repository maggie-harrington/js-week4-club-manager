import { Component, OnInit } from '@angular/core';
import { MemberProfile } from '../member-profile.model';
import { MemberProfileService } from '../member-profile.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberProfileService]
})

export class MembersComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private memberProfileService: MemberProfileService, private router: Router) { }

  ngOnInit() {
    this.members = this.memberProfileService.getMembers();
  }

  goToDetailPage(clickedMember) {
   this.router.navigate(['members', clickedMember.$key]);
 }

  rideFilter: string = "allMembers";

  onChange(optionFromMenu) {
    this.rideFilter = optionFromMenu;
  }

}
