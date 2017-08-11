import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";


@Injectable()
export class GroupsService {



    constructor(private http: HttpService) {}

    getFacebookGroup(facebookId: string) {
        this.http.req('post', 'groups', {'facebookId': facebookId}).subscribe((data) => {
            console.log(data);
        });
    }

    getJoinedGroups() {
        this.http.req('get', 'groups', {})
    }
}

