import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { PrescriptionItem } from "src/app/models/prescription-item";
import { DetallePrescripcionComponent } from "src/app/modules/dialogs/detalle-prescripcion/detalle-prescripcion.component";

@Component({
  selector: "app-prescripcion-detalle",
  templateUrl: "./prescripcion-detalle.component.html",
  styleUrls: ["./prescripcion-detalle.component.scss"],
})
export class PrescripcionDetalleComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

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

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(DetallePrescripcionComponent, {
      width: "600px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
