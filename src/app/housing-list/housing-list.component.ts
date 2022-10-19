import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  @Input() locationList: HousingLocation[] = [];
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  searchResults: HousingLocation[] = [];
  filtered: boolean = false;

  searchHousingLocations(searchText: string) {
    if (!searchText) {
      this.searchResults = [];
      this.filtered = false;
      return;
    }
    this.filtered = true;
    this.searchResults = this.locationList.filter((location: HousingLocation) =>
      location.city.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  getLocationList(): HousingLocation[] {
    if (this.filtered) return this.searchResults;
    return this.locationList;
  }

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
}
