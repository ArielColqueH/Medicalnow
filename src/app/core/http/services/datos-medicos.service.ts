import { Injectable } from "@angular/core";
import { DatosMedicos } from "src/app/models/datos-medicos";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { config } from "src/app/models/auth/config";
import { MedicalDataModel } from "src/app/models/medical-data-model";
import { DescriptionModel } from "src/app/models/description-model";

@Injectable({
  providedIn: "root",
})
export class DatosMedicosService {
  constructor(private _http: HttpClient) {}

  registerMedicalData(datos: DatosMedicos): Observable<any> {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/user/medical_data/update/` +
        localStorage.getItem("userId"),
      datos,
      {
        headers: reqHeader,
      }
    );
  }

  registerAlergiasData(medicalDataModel: DescriptionModel): Observable<any> {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/user/allergy/update/` + localStorage.getItem("userId"),
      medicalDataModel,
      {
        headers: reqHeader,
      }
    );
  }

  registerPreviosData(medicalDataModel: DescriptionModel): Observable<any> {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/user/background/update/` +
        localStorage.getItem("userId"),
      medicalDataModel,
      {
        headers: reqHeader,
      }
    );
  }
}
