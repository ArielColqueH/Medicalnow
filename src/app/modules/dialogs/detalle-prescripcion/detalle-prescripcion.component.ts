import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Prescription } from "src/app/models/prescription";

@Component({
  selector: "app-detalle-prescripcion",
  templateUrl: "./detalle-prescripcion.component.html",
  styleUrls: ["./detalle-prescripcion.component.scss"],
})
export class DetallePrescripcionComponent implements OnInit {
  passedId: string;

  // prescriptionList: Prescription[] = [
  //   {
  //     prescriptionId: 1,
  //     prescriptionName: "Vitagripin",
  //     prescriptionDetail: "5 pastillas diarias",
  //     prescriptionQuantity: 10,
  //   },
  //   {
  //     prescriptionId: 2,
  //     prescriptionName: "Alikal LCH",
  //     prescriptionDetail: "4 pastillas diarias",
  //     prescriptionQuantity: 15,
  //   },
  // ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string }) {}

  ngOnInit() {}
}
