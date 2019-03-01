import { PeopleService } from "./../people.service";
import { Component, OnInit } from "@angular/core";
import { Person } from "../person";
import { map } from "rxjs/operators";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.css"]
})
export class SummaryComponent implements OnInit {
  people: Person[];
  oldest: Person;
  youngest: Person;
  mean: number;
  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(x => {
      this.people = x;
      this.oldest = x.reduce((max, x) => {
        return x.death - x.birth > max.death - max.birth ? x : max;
      });
      this.youngest = x.reduce((min, x) => {
        return x.death - x.birth < min.death - min.birth ? x : min;
      });
      const sum = x.reduce((curr, prev) => {
        return prev.death - prev.birth + curr;
      }, 0);
      this.mean = sum / x.length;
    });
  }
}
