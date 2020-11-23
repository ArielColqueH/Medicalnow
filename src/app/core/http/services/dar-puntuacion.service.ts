import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";
import { QualificationModel } from "src/app/models/qualification-model";

@Injectable({
  providedIn: "root",
})
export class DarPuntuacionService {
  constructor(private _http: HttpClient) {}

  sendQualification(consultId: number, qualificacion: QualificationModel) {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/consult/add/qualification/` + consultId,
      qualificacion,
      {
        headers: reqHeader,
      }
    );
  }
}
