import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { PrescriptionListService } from "src/app/core/http/services/prescription-list.service";
import { PrescriptionDetail } from "src/app/models/prescription-detail";
import { PrescriptionItem } from "src/app/models/prescription-item";
import { PrescriptionJson } from "src/app/models/prescription-json";
import { DetallePrescripcionComponent } from "src/app/modules/dialogs/detalle-prescripcion/detalle-prescripcion.component";

@Component({
  selector: "app-prescripcion-detalle",
  templateUrl: "./prescripcion-detalle.component.html",
  styleUrls: ["./prescripcion-detalle.component.scss"],
})
export class PrescripcionDetalleComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  listaPrescription = new PrescriptionJson();
  // listPrescriptionItem: PrescriptionItem[] = [
  //   {
  //     prescriptionId: 1,
  //     diagnosis: "Lorem Ipsum",
  //     doctorFirstName: "Richard",
  //     doctorFirstSurname:"Lups",
  //     prescriptionDate: "12/12/2020"
  //   },
  //   {
  //     prescriptionId: 2,
  //     diagnosis: "Lorem Ipsum",
  //     doctorFirstName: "Maria",
  //     doctorFirstSurname:"Delagado",
  //     prescriptionDate: "11/12/2020"

  //   },
  // ];

  prescripction: PrescriptionDetail[] = [
    {
      date: "2020/1/2",
      prescriptionId: 1,
    },
    {
      date: "2020/1/3",
      prescriptionId: 2,
    },
  ];
  //prescripction: PrescriptionDetail[];

  ngOnInit() {
    //this.ObtenerDatos();
  }

  openDialog(id: number) {
    console.log(id);
    const dialogRef = this.dialog.open(DetallePrescripcionComponent, {
      width: "600px",
      // data: { id: this.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
