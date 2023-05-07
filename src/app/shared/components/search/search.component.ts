import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject, debounceTime, map } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

    @Output() onSearchInputted: EventEmitter<string> = new EventEmitter();
    @Input() placeholder: string = 'No Placeholder';
    @Input() styleOptions: string = '';
    
    faSearch = faSearch;
    subject = new Subject<string>();
    results$: Observable<string>;

    constructor() {
        this.results$ = this.subject.pipe(debounceTime(1000),  map((searchInput) => searchInput))
        this.results$.subscribe((result) => { this.onSearchInputted.emit(result) });
    }

    onKeyPress(event: any) {
        let searchInput: string = event?.target?.value;
        this.subject.next(searchInput)
    }
}
