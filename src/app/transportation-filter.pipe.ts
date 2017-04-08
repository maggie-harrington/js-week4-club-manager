import { Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MemberProfile } from './member-profile.model';
import { MemberProfileService } from './member-profile.service';

@Pipe({
  name: 'transportationFilter',
  pure: false
})

export class TransportationFilterPipe implements PipeTransform {

  transform(input: MemberProfile[], rideFilter) {
    if (input) {
      var output: MemberProfile[] = [];
      if (rideFilter === "hasCar") {
        for(var i = 0; i < input.length; i++) {
          if (input[i].transportationStatus === "has car") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (rideFilter === "needsRide") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].transportationStatus === "needs ride") {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
  }

}
