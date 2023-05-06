import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

    @Output() onSearchInputted: EventEmitter<string> = new EventEmitter();
    @Input() placeholder: string = 'No Placeholder';
    @Input() styleOptions: string = '';

    constructor() {}
    
    onKeyPress(event: any) {
        setTimeout(() => {
            this.onSearchInputted.emit(event?.target?.value)
        }, 1000)
    }
}
