import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
//import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "src/app/core/auth/auth.service";
@Component({
  selector: "app-asistencia-medica",
  templateUrl: "./asistencia-medica.component.html",
  styleUrls: ["./asistencia-medica.component.scss"],
})
export class AsistenciaMedicaComponent implements OnInit {
  medicoGeneralImage: string = "assets/images/doctor.png";
  especialistaImage: string = "assets/images/stethoscope.png";
  message: String = "link";
  nombrePaciente: string = "Mariana";
  constructor(
    private _router: Router,
    private route: ActivatedRoute,

    private _service: AuthService
  ) {}
  ngOnInit() {
    // if (this.jwtHelper.isTokenExpired(this._service.getJwtToken())) {
    //   this._service.doLogoutUser();
    //   this._router.navigate(["/login"]);
    // }
  }
  irMedicoGeneral() {
    console.log("medico general");
    this._router.navigate(["lista-especialidades/lista-especialistas/4"], {
      relativeTo: this.route,
    });
  }

  irMedicoEspecialista() {
    console.log("especialista");
    this._router.navigate(["lista-especialidades"], { relativeTo: this.route });
  }
}
