import { Component, OnInit } from '@angular/core';
import { SearchUsersService } from '../search-users.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  place: string;
  language: string;
  results: any[] = []; // This will hold the data coming from the service
  selected = false; // Flag to check if a user is clicked or not
  selectedUser: any; // presently Selected user details
  error_text = ''; // So called error reporing text to the end user
  constructor(private searchService: SearchUsersService) { }

  ngOnInit() {
  }

  search(place: string, language: string) {
    this.place = place;
    this.language = language;
    if (place || language) {
      this.place = place;
      this.language = language;
      this.searchService.getUsersByPlaceAndLanguage(place, language).subscribe(
        users => {
          this.results = users;
        },
        error => {
          this.results = [];
          this.error_text = 'Sorry! No Users found. Try again';
          console.error(error);
        }
      );
    }
  }

  getDetails(username: string) {
    this.searchService.getDetailsByUserName(username).subscribe(
      userDatils => {
        this.selectedUser = userDatils;
        this.selected = true;
      },
      error => {
        this.selected = false;
        console.error(error);
      }
    )
}
}
