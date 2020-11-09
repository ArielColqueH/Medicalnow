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
      prescriptionId: 1,
      diagnosis: "Lorem Ipsum",
      doctorFirstName: "Richard",
      doctorFirstSurname:"Lups",
      prescriptionDate: "12/12/2020"
    },
    {
      prescriptionId: 2,
      diagnosis: "Lorem Ipsum",
      doctorFirstName: "Maria",
      doctorFirstSurname:"Delagado",
      prescriptionDate: "11/12/2020"
      
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
