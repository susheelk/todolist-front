import {NgModule} from "@angular/core";
import {GroupsService} from "../../services/groups.service";
import {FormsModule} from "@angular/forms";
import {MaterializeModule} from "angular2-materialize";
import {BrowserModule} from "@angular/platform-browser";
import {TopicTasksComponent} from "./topic-tasks-component/topic-tasks.component";
import {TasksService} from "../../services/tasks.service";
@NgModule({
    imports: [
        FormsModule,
        MaterializeModule,
        BrowserModule
    ],

    declarations: [
        TopicTasksComponent
    ],

    exports: [
        TopicTasksComponent
    ],

    providers: [
        GroupsService,
        TasksService
    ]

})
export class MiscComponentsModule {}
