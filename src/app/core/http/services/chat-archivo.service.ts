import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";
import { MessageModel } from "src/app/models/MessageModel";

@Injectable({
  providedIn: "root",
})
export class ChatArchivoService {
  constructor(private _http: HttpClient) {}

  sendFile(uploadImageData: any, consultId: string) {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.post<any>(
      `${config.apiUrl}/chat/` + consultId + `/image/upload`,
      uploadImageData,
      {
        headers: reqHeader,
      }
    );
  }
}
