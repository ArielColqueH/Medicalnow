import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { PrescriptionItem } from "src/app/models/prescription-item";
import { PrescriptionJson } from 'src/app/models/prescription-json';
import { DetallePrescripcionComponent } from "src/app/modules/dialogs/detalle-prescripcion/detalle-prescripcion.component";

@Component({
  selector: "app-prescripcion-detalle",
  templateUrl: "./prescripcion-detalle.component.html",
  styleUrls: ["./prescripcion-detalle.component.scss"],
})
export class PrescripcionDetalleComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  listaPrescription = new PrescriptionJson();
  id:any;
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

  ngOnInit() {}

  openDialog(id: number) {
    console.log(id);
    const dialogRef = this.dialog.open(DetallePrescripcionComponent, {
      width: "600px",
      data:{id:this.id}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
