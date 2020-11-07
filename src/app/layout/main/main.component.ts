import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { Avatar } from "src/app/models/avatar";
import { AvatarService } from "src/app/core/http/services/avatar.service";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  isSidebarOpen2: boolean = true;
  contentMargin = 25;
  avatar = new Avatar();

  constructor(
    private _service: AvatarService,
    private _location: Location,
    private _router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.ObtenerDatos();
  }
  ObtenerDatos() {
    this._service.listAvatar().subscribe((data) => (this.avatar = data));
  }
  signout(): void {
    this.authService.doLogoutUser();
    this._router.navigate(["/login"]);
  }
}
