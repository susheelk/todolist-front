export class Identifiable {
    id: string;

    // static fromJson<T>(obj: T, json: object): T {
    //     Object.keys(json).forEach((key) => {
    //         obj[key] = json[key];
    //     });
    //
    //     return obj;
    // }

    constructor(obj: object) {
        this.fromObject(obj);
    }

    fromObject(obj: object) {
        if (obj != null) {
            Object.keys(obj).forEach((key) => {
              this[key] = obj[key];
            });
        }
    }
}

export class User extends Identifiable{
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    pictureUrl: string;
    facebookId: string;

}

export class Group extends Identifiable {
    facebookId: string;
    name: string;
    pictureUrl: string;
}
