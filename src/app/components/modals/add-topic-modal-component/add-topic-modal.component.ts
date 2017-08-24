import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {GroupsService} from "../../../services/groups.service";
import {MaterializeAction} from "angular2-materialize";
import {Group, Topic} from "../../../model";

@Component({
    selector: 'add-topic-modal',
    templateUrl: './add-topic-modal.component.html',
    styleUrls: ['../../../../styles.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [GroupsService]
})
export class AddTopicModalComponent {

    @Input() group: Group;
    @Output() groupChange = new EventEmitter();

    toAdd: Topic = new Topic({});
    modalActions = new EventEmitter<string|MaterializeAction>();


    // Form data
    private topicName: string;

    constructor(private gs: GroupsService){}

    ngOnInit() {
        this.toAdd.groupId = this.group.id;
    }

    open() {
        this.toAdd.startDate = new Date();
        this.modalActions.emit({action:'modal', params:['open']});
    }

    close() {
        this.modalActions.emit({action:'modal', params:['close']});
    }

    test() {
        return JSON.stringify(this.toAdd);
    }

    addTopic() {
        this.toAdd.groupId = this.group.id;
        this.toAdd.completed = false;

        this.gs.addTopic(this.toAdd, (topic: Topic) => {
            this.group.topics.push(topic);
            this.groupChange.emit(this.group);
            this.toAdd = new Topic({});
        });
    }
}


