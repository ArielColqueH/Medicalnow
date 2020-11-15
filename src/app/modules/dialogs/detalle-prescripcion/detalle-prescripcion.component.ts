import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { PrescriptionListDetailService } from "src/app/core/http/services/prescription-list-detail.service";
import { Prescription } from "src/app/models/prescription";
import { PrescriptionDetailJSON } from "src/app/models/prescription-detail-json";

@Component({
  selector: "app-detalle-prescripcion",
  templateUrl: "./detalle-prescripcion.component.html",
  styleUrls: ["./detalle-prescripcion.component.scss"],
})
export class DetallePrescripcionComponent implements OnInit {
  descriptionDetail = new PrescriptionDetailJSON();
  aux = this.data.prescriptionId;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _service: PrescriptionListDetailService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log(
    //   "TAMANO DE ARREGLO : " + this.descriptionDetail.prescription_detail.length
    // );
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service
      .getPrescriptionDetail(this.aux)
      .subscribe((data) => (this.descriptionDetail = data));
  }
}
