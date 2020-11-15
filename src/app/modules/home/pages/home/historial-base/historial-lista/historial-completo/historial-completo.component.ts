import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HistorialmedicoService } from "src/app/core/http/services/historialmedico.service";
import { HistorialMedico } from "src/app/models/historial-medico";

@Component({
  selector: "app-historial-completo",
  templateUrl: "./historial-completo.component.html",
  styleUrls: ["./historial-completo.component.scss"],
})
export class HistorialCompletoComponent implements OnInit {
  historialMedico = new HistorialMedico();
  constructor(
    private _service: HistorialmedicoService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service
      .getHistorial()
      .subscribe((data) => (this.historialMedico = data));
  }
}
