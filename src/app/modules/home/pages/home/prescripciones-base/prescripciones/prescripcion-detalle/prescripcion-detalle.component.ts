import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { PrescriptionDetailListService } from "src/app/core/http/services/prescription-detail-list.service";
import { PrescriptionListService } from "src/app/core/http/services/prescription-list.service";

import { PrescriptionJson } from "src/app/models/prescription-json";
import { PrescriptionModel } from "src/app/models/prescription-model";
import { PrescriptionModelJSON } from "src/app/models/prescription-model-json";
import { DetallePrescripcionComponent } from "src/app/modules/dialogs/detalle-prescripcion/detalle-prescripcion.component";

@Component({
  selector: "app-prescripcion-detalle",
  templateUrl: "./prescripcion-detalle.component.html",
  styleUrls: ["./prescripcion-detalle.component.scss"],
})
export class PrescripcionDetalleComponent implements OnInit {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public dialog: MatDialog,
    private _service: PrescriptionDetailListService
  ) {}

  listaPrescriptionDetail = new PrescriptionModelJSON();

  ngOnInit() {
    this.ObtenerDatos();
  }

  openDialog(prescriptionid: number) {
    const dialogRef = this.dialog.open(DetallePrescripcionComponent, {
      width: "1000px",
      data: { prescriptionId: prescriptionid },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ObtenerDatos() {
    this._service
      .listPrescriptionDetail(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.listaPrescriptionDetail = data));
    //this.aux = this.listaEspecialidades;
  }
}
