import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";

@Injectable({
  providedIn: "root",
})
export class ChatPacienteService {
  constructor(private _http: HttpClient) {}
  listChat() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<any>(
      `${config.apiUrl}/chat/` + localStorage.getItem("userId") + `/messages`,
      {
        headers: reqHeader,
      }
    );
  }
}
