import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { ListaHistorialMedicoHojasService } from "src/app/core/http/services/lista-historial-medico-hojas.service";
import { MedicalHistoryDateListModel } from "src/app/models/medical-history-date-list-model";
import { MedicalHistoryHojaJSON } from "src/app/models/medical-history-hoja-json";

@Component({
  selector: "app-historial-hojas",
  templateUrl: "./historial-hojas.component.html",
  styleUrls: ["./historial-hojas.component.scss"],
})
export class HistorialHojasComponent implements OnInit {
  medicalHitoryHoja = new MedicalHistoryHojaJSON();
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public dialog: MatDialog,
    private _service: ListaHistorialMedicoHojasService
  ) {}

  ngOnInit() {
    this.ObtenerListaHojas();
  }

  irHistorialCompleto(consultId: number) {
    this._router.navigate(["historial-completo/" + consultId], {
      relativeTo: this._route,
    });
  }
  ObtenerListaHojas() {
    this._service
      .getListaHojas(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.medicalHitoryHoja = data));
  }
}
