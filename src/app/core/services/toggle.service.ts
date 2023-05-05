import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ToggleService {

    private sidebarToggleSubject = new Subject<boolean>();

    constructor() { }

    setSidebarToggleState(state: boolean) {
        this.sidebarToggleSubject.next(state);
    }

    getSidebarToggleState(): Observable<boolean> {
        return this.sidebarToggleSubject.asObservable();
    }

}
