import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserConfigurationService } from "src/app/core/http/services/user-configuration.service";
import { UserConfigurationModel } from "src/app/models/user-configuration-model";
@Component({
  selector: "app-configuraciones",
  templateUrl: "./configuraciones.component.html",
  styleUrls: ["./configuraciones.component.scss"],
})
export class ConfiguracionesComponent implements OnInit {
  ciudad_combo: String[] = ["La Paz", "Cochabamba", "Santa Cruz"];
  configuraciones = new UserConfigurationModel();
  usuario = new UserConfigurationModel();

  //datos = new UserConfigurationModel();

  constructor(
    private _service: UserConfigurationService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.Obtenerdatos();
  }

  Obtenerdatos() {
    // this._service
    //   .obtenerDatosConfiguration()
    //   .subscribe((data) => (this.usuario = data));
  }

  datosActualizados() {
    // this._service.datosActualizadosFromRemote(this.datos).subscribe(
    //   (data) => {
    //     console.log("actualizados");
    //   },
    //   (error) => {
    //     console.log("exception ocurred");
    //   }
    // )
  }
}
