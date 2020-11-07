import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PrescriptionItem } from "src/app/models/prescription-item";

@Component({
  selector: "app-prescripciones",
  templateUrl: "./prescripciones.component.html",
  styleUrls: ["./prescripciones.component.scss"],
})
export class PrescripcionesComponent implements OnInit {
  listPrescriptionItem: PrescriptionItem[] = [
    {
      prescriptionItemId: 1,
      diagnosisName: "Lorem Ipsum",
      doctorName: "Richard Lups",
      prescriptionDate: "12/12/2020",
      prescriptionId: 1,
    },
    {
      prescriptionItemId: 2,
      diagnosisName: "Lorem Ipsum",
      doctorName: "Maria Delagado",
      prescriptionDate: "11/12/2020",
      prescriptionId: 2,
    },
  ];
  constructor(private _router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  irRecetas() {
    this._router.navigate(["prescripciones-detalle"], {
      relativeTo: this.route,
    });
  }
}
