import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";

@Injectable({
  providedIn: "root",
})
export class PrescriptionDetailListService {
  constructor(private _http: HttpClient) {}

  listPrescriptionDetail(consultId: string) {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/prescription/` + consultId + `/all`,
      {
        headers: reqHeader,
      }
    );
  }
}
