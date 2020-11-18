import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/internal/operators/map";
import { config } from "src/app/models/auth/config";
import { MessageModel } from "src/app/models/MessageModel";

@Injectable({
  providedIn: "root",
})
export class ChatMensajeService {
  constructor(private _http: HttpClient) {}

  sendMenssage(pacientMessage: MessageModel) {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/chat/send/message/` + localStorage.getItem("userId"),
      pacientMessage,
      {
        headers: reqHeader,
      }
    );
  }
}
