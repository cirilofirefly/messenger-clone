import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Injectable({
    providedIn: 'root'
})
export class CommonService {
    
    constructor(private title: Title) {}

    setPageTile(title: string) {
        this.title.setTitle(title);
    }
}
