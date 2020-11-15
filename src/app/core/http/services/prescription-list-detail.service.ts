import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class PrescriptionListDetailService {
  constructor(private _http: HttpClient) {}

  getPrescriptionDetail(prescriptionId: string): Observable<any> {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/prescription/` + prescriptionId + `/detail`,
      {
        headers: reqHeader,
      }
    );
  }
}
