import {NgModule} from "@angular/core";
import {AddTopicModalComponent} from "./add-topic-modal-component/add-topic-modal.component";
import {GroupsService} from "../../services/groups.service";
import {FormsModule} from "@angular/forms";
import {MaterializeModule} from "angular2-materialize";
import {BrowserModule} from "@angular/platform-browser";
@NgModule({
    imports: [
        FormsModule,
        MaterializeModule,
        BrowserModule
    ],

    declarations: [
        AddTopicModalComponent
    ],

    exports: [
        AddTopicModalComponent
    ],

    providers: [
        GroupsService
    ]

})
export class ModalsModule {}
