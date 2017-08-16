import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {Group, User} from "../model";
import "rxjs/add/operator/map";

@Injectable()
export class GroupsService {

    user: User = new User(null);

    constructor(private http: HttpService) {}

    joinGroup(facebookId: string, success?: (group: Group) => any) {
        this.http.req('post', 'groups', {'facebookId': facebookId}).map(this.extractGroup).subscribe(success);
    }

    getJoinedGroups(success: (groups: Group[]) => any) {
        this.http.req('get', 'groups', {'joined': '$me_id'}).map(this.extractGroups).subscribe(success);
    }

    getGroup(groupId: string, success: (groups: Group[]) => any, fail: (error) => any) {
        this.http.req('get', 'groups', {'id': groupId}).map(this.extractGroups).subscribe(success, fail);
    }

    extractGroups(json): Group[] {
        let groups: Group[] = [];
        for (let group of json.data) {
            groups.push(new Group(group));
        }
        return groups;
    }

    extractGroup(json): Group {
        return new Group(json);
    }

}


