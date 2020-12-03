import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PrescriptionListService } from "src/app/core/http/services/prescription-list.service";
import { PrescriptionListModel } from "src/app/models/prescriptionlistmodel";

@Component({
  selector: "app-prescripciones",
  templateUrl: "./prescripciones.component.html",
  styleUrls: ["./prescripciones.component.scss"],
})
export class PrescripcionesComponent implements OnInit {
  // listPrescriptionItem: PrescriptionItem[] = [
  //   {
  //     prescriptionId: 1,
  //     medicalHistoryId: 1,
  //     firstName: "Benedict",
  //     firstSurname: "Lopez",
  //     secondSurname: "Espinoza",
  //     specialtyName: "Odontologia",
  //     prescriptionDate: "2020/1/20",
  //   },
  //   {
  //     prescriptionId: 1,
  //     medicalHistoryId: 1,
  //     firstName: "Benedict",
  //     firstSurname: "Lopez",
  //     secondSurname: "Espinoza",
  //     specialtyName: "Odontologia",
  //     prescriptionDate: "2020/1/20",
  //   },
  // ];
  listPrescriptionItem: PrescriptionListModel[];
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _service: PrescriptionListService
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  irRecetas(consultId: number) {
    this._router.navigate(["prescripciones-detalle/" + consultId], {
      relativeTo: this.route,
    });
  }

  ObtenerDatos() {
    this._service
      .listPrescription()
      .subscribe((data) => (this.listPrescriptionItem = data));
  }
}
