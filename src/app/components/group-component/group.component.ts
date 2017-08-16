import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {GroupsService} from "../../services/groups.service";
import {Group} from "../../model";

@Component({
    selector: 'group ',
    templateUrl: './group.component.html',
    styleUrls: ['../../../styles.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export class GroupComponent {

    group: Group = new Group({});


    constructor (private route: ActivatedRoute, private router: Router, private gs: GroupsService) {}

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        this.gs.getGroup(id, (groups: Group[]) => {
            this.group = groups[0];
        }, (error) => {
            console.log('grouperror: '+error);
        });
    }

}



