import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";
import { DoctorSpecialtyIdModel } from "src/app/models/doctor-specialty-id-model";

@Injectable({
  providedIn: "root",
})
export class CrearNuevoChatService {
  constructor(private _http: HttpClient) {}

  createChat(doctorSpecialtyId: DoctorSpecialtyIdModel) {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/consult/new/` + localStorage.getItem("userId"),
      doctorSpecialtyId,
      {
        headers: reqHeader,
      }
    );
  }
}
