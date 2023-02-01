import {Component, Input, OnChanges, ViewEncapsulation} from '@angular/core';
import {BannerProfile, Profile} from '@setbrain-dashboard/shared/data-access/users';

@Component({
  selector: 'setbrain-dashboard-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UsersListComponent implements OnChanges {
  @Input() users: BannerProfile[] | Profile[] | undefined;
  @Input() connectedUser: Profile | undefined;
  @Input() connectedUserColor = 'blue-100';
  @Input() height = '6';
  noConnectedUsers: BannerProfile[] | Profile[] | undefined;
  connectedUserIsAssigned = false;

  ngOnChanges() {
    if (this.users) {
      this.noConnectedUsers = this.users;
      this.connectedUserIsAssigned = this.users.some(element => {
        return element.id === this.connectedUser?.id;
      });

      if(this.connectedUserIsAssigned) {
        this.noConnectedUsers.splice(this.noConnectedUsers?.findIndex(element => this.connectedUser?.id === element.id), 1);
      }
    }
  }
}
