import { environment } from "./../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Person } from "./person";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get<Person[]>(environment.localhostUrl);
  }

  getHeaders() {
    return ["Name", "Birth Year", "Death Year", "Age at Death"];
  }
}
