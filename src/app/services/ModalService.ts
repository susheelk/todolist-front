import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ModalService {

    private modalStreamSource = new BehaviorSubject<ModalDataHolder>(null);
    modalStream$ = this.modalStreamSource.asObservable();

}

export class ModalDataHolder {
    modalName: string;
    modalAction: string;
    modalData: Object;


    constructor(modalName: string, modalAction: string, modalData: Object) {
        this.modalName = modalName;
        this.modalAction = modalAction;
        this.modalData = modalData;
    }
}
