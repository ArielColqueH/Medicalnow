import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SpecialtieslistService {
  constructor(private _http: HttpClient) {}

  URL = "http://localhost:8008/api/v1/specialties";

  listSpecialties(id: string) {
    console.log("id : " + id);
    return this._http.get<any>(this.URL + "/" + id);
  }

  listSpecialtiesFree(id: string) {
    console.log("id : " + id);
    return this._http.get<any>(this.URL + "/free/" + id);
  }
}
