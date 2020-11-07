import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/models/auth/config";
import { UserConfigurationModel } from "src/app/models/user-configuration-model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserConfigurationService {
  constructor(private _http: HttpClient) {}
  obtenerDatosConfiguration() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<UserConfigurationModel>(
      `${config.apiUrl}/user/` + localStorage.getItem("userId") + `/config`,
      {
        headers: reqHeader,
      }
      //http://localhost:8008/api/v1/user/29/config
    );
  }

  public datosActualizadosFromRemote(user: UserConfigurationModel): Observable<any> {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.put(`${config.apiUrl}/user/` + localStorage.getItem("userId")+`/config/update`,
      {
        headers: reqHeader,
        user
      }
    );
  }
}/*public conexionBackend(user: User):Observable<any>{
    return this._http.post<any>("http://localhost:8008/api/v1/user/registry",user);
  }*/
