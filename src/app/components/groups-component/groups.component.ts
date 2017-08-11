import { Component } from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {User} from "../../model";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'group',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {

    private user: User = new User(null);

    constructor(private groupsService: GroupsService, private auth: AuthenticationService) {
        this.auth.user$.subscribe((user: User) => {
            this.user = user;
        });
    }

    onEnter(value: string) {
        console.log(value);
        this.groupsService.getFacebookGroup(value);
    }
}
