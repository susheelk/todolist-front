import {Component, OnInit} from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {Group, User} from "../../model";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'group',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

    joinedGroups: Group[] = new Array<Group>();

    constructor(private groupsService: GroupsService, private auth: AuthenticationService, private router: Router) {}

    ngOnInit() {
        this.groupsService.getJoinedGroups((groups: Group[]) => {
            this.joinedGroups = groups;
        });
    }

    joinGroup(value: string) {
        console.log(value);
        this.groupsService.joinGroup(value, (group: Group) => {
            this.joinedGroups.push(group);
        });
    }


    goToGroup(id: string) {
        console.log('goto: '+id);
        this.router.navigate(['/groups/'+id]);
    }
}




