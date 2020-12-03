import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { DatosGeneralesPacienteService } from "src/app/core/http/services/datos-generales-paciente.service";
import { HistorialmedicoService } from "src/app/core/http/services/historialmedico.service";
import { DescriptionModel } from "src/app/models/description-model";
import { HistorialMedico } from "src/app/models/historial-medico";
import { MedicalDataModel } from "src/app/models/medical-data-model";
import { DetallePrescripcionComponent } from "src/app/modules/dialogs/detalle-prescripcion/detalle-prescripcion.component";
import { MiniChatComponent } from "src/app/modules/dialogs/mini-chat/mini-chat.component";

@Component({
  selector: "app-historial-completo",
  templateUrl: "./historial-completo.component.html",
  styleUrls: ["./historial-completo.component.scss"],
})
export class HistorialCompletoComponent implements OnInit {
  historialMedico = new HistorialMedico();
  //medicalDataModel = new MedicalDataModel();
  grupoSanguineo: string[] = [
    "O negativo",
    "O positivo",
    "A negativo",
    "A positivo",
    "B negativo",
    "B positivo",
    "AB negativo",
    "AB positivo",
  ];
  //descriptionModelAlergias = new DescriptionModel();
  //descriptionModelPrevios = new DescriptionModel();
  constructor(
    private _service: HistorialmedicoService,
    public dialog: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router,
    private _serviceDatosGenerales: DatosGeneralesPacienteService
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service
      .getHistorial(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.historialMedico = data));
  }
  abrirPrescripcion(prescriptionid: number) {
    const dialogRef = this.dialog.open(DetallePrescripcionComponent, {
      width: "600px",
      data: { prescriptionId: prescriptionid },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  abrirMiniChat(consultId: number) {
    const dialogRef = this.dialog.open(MiniChatComponent, {
      width: "600px",
      data: { prescriptionId: this._route.snapshot.paramMap.get("id") },
    });
  }
}
