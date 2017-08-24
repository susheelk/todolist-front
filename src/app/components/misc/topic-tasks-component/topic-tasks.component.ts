import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {Topic} from "../../../model";

@Component({
    selector: 'topic-tasks',
    templateUrl: './topic-tasks.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class TopicTasksComponent {

    @Input() topic: Topic;
    @Output() topicChange = new EventEmitter();

    constructor() {}

    ngOnInit() {

    }

    addTask(name: string) {
        console.log(name);
    }
}

