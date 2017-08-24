import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {GroupsService} from "../../../services/groups.service";
import {Group, Topic} from "../../../model";
import {Title} from "@angular/platform-browser";
import {TitleService} from "../../../services/title.service";

@Component({
    selector: 'group ',
    templateUrl: './group.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export class GroupComponent {

    group: Group = new Group({});

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private gs: GroupsService,
        private ts: TitleService
    ){}

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        this.gs.getGroup(id, (groups: Group[]) => {
            this.group = groups[0];
            this.ts.setTitle(this.group.name);
            this.getTopics();
        }, (error) => {
            console.log('grouperror: '+error);
        });
    }

    getTopics() {
        this.gs.getTopics(this.group.id, (topics: Topic[]) => {
            this.group.topics = topics;
        });
    }

    addTask(topic: Topic) {

    }

}




