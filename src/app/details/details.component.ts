import { PeopleService } from "./../people.service";
import { Component, OnInit } from "@angular/core";
import { Person } from "../person";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  people: Person[];
  headers: string[];
  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.headers = this.peopleService.getHeaders();
    this.getPeople();
  }

  getPeople() {
    this.peopleService
      .getPeople()
      .subscribe(
        data => (this.people = data.sort((a, b) => b.death - a.death))
      );
  }
}
