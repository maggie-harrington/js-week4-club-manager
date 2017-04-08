import { Component, OnInit, Input } from '@angular/core';
import { MemberProfile } from '../member-profile.model';
import { MemberProfileService } from '../member-profile.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberProfileService]
})

export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private memberService: MemberProfileService) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
  }

  beginDeletingMember(memberToDelete){
    if(confirm("Are you sure you want to remove this member from the club?")){
      this.memberService.deleteMember(memberToDelete);
    }
  }
}
