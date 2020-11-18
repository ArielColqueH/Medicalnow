import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { HistorialmedicolistaService } from "src/app/core/http/services/historialmedicolista.service";
import { MedicalHistoryListModel } from "src/app/models/medical-history-list-model";
import { DarPuntuacionComponent } from "src/app/modules/dialogs/dar-puntuacion/dar-puntuacion.component";

@Component({
  selector: "app-historial-lista",
  templateUrl: "./historial-lista.component.html",
  styleUrls: ["./historial-lista.component.scss"],
})
export class HistorialListaComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public dialog: MatDialog,
    private _service: HistorialmedicolistaService
  ) {}
  medicalHistorymodel: MedicalHistoryListModel[] = [];

  ngOnInit() {
    this.ObtenerDatos();
  }
  irHistorialGeneral(medicalHistoryId: number) {
    this._router.navigate(["historial-completo/" + medicalHistoryId], {
      relativeTo: this._route,
    });
  }

  darPuntuacion() {
    const dialogRef = this.dialog.open(DarPuntuacionComponent, {
      width: "600px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ObtenerDatos() {
    this._service
      .getListMedicalHistory()
      .subscribe((data) => (this.medicalHistorymodel = data));
  }
}
