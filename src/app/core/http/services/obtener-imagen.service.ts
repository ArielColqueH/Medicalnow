import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";

@Injectable({
  providedIn: "root",
})
export class ObtenerImagenService {
  constructor(private _http: HttpClient) {}

  getImage(consultId: string) {
    console.log("consult id :" + consultId);
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/chat/` + consultId + `/get/images`,
      {
        headers: reqHeader,
      }
    );
  }
}
