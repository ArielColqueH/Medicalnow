import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { catchError, mapTo, tap } from "rxjs/operators";

import { Tokens } from "src/app/models/auth/tokens";
import { config } from "src/app/models/auth/config";
import { UserDataModel } from "src/app/models/user";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly JWT_TOKEN = "JWT_TOKEN";
  private readonly REFRESH_TOKEN = "REFRESH_TOKEN";
  private readonly USERID = "userId";
  private loggedUser: string;
  tokenJWT: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(user: UserDataModel): Observable<any> {
    return this.http.post<any>(`${config.apiUrl}/security/login`, user).pipe(
      tap((tokens) => this.doLoginUser(user.email, tokens)),
      mapTo(true),
      catchError((error) => {
        alert(error.error);
        return of(false);
      })
    );
  }

  logout() {
    return this.http
      .post<any>(`${config.apiUrl}/logout`, {
        refreshToken: this.getRefreshToken(),
      })
      .pipe(
        tap(() => this.doLogoutUser()),
        mapTo(true),
        catchError((error) => {
          alert(error.error);
          return of(false);
        })
      );
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    console.log("refrescando tokens");
    //console.log("token refresh " + this.getRefreshToken());

    return this.http
      .post<any>(`${config.apiUrl}/security/refresh`, {
        refreshToken: this.getRefreshToken(),
      })
      .pipe(
        tap((tokens: Tokens) => {
          this.storeTokens(tokens);
          window.location.reload();
          //console.log("token authentication : " + tokens.authentication);
        })
      );

    // return this.http
    //   .post<any>(`${config.apiUrl}/security/refresh`, {
    //     refreshToken: this.getRefreshToken(),
    //   })
    //   .pipe(
    //     tap((tokens) => this.storeTokens(tokens)),
    //     mapTo(true),
    //     catchError((error) => {
    //       alert(error.error);
    //       return of(false);
    //     })
    //   );
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
    this.router.navigate(["/asistencia-medica/" + tokens.userId]);
  }

  doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.authentication);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh);
    localStorage.setItem("userId", tokens.userId.toString());
  }

  removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem(this.USERID);
  }

  // tokenExpired() {
  //   this.tokenJWT = this.getJwtToken();
  //   const expiry = JSON.parse(atob(this.tokenJWT.split(".")[1])).exp;
  //   return Math.floor(new Date().getTime() / 1000) >= expiry;
  // }
}
