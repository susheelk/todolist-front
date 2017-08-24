import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {NavigationStart, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";


/**
 *  Data holder for the window title
 */
@Injectable()
export class TitleService {

    private titleChangeSource = new BehaviorSubject<String>(null);
    title$ = this.titleChangeSource.asObservable();

    constructor(private winTitle: Title) {}

    setTitle(title: string) {
        this.titleChangeSource.next(title);
        this.winTitle.setTitle('TODOLIST | '+title);
    }
}
