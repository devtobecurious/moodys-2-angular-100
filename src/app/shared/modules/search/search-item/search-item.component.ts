import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'amb-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  searchItem = '';
  @Output() search = new EventEmitter<string>();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  attachToClick() {
    console.info(this.searchItem);
    // this.search.emit(this.searchItem);
    this.searchService.searchValue = this.searchItem;
  }

}
