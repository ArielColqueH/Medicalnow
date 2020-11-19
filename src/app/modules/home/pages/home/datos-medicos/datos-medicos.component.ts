import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DatosGeneralesPacienteService } from "src/app/core/http/services/datos-generales-paciente.service";
import { DatosMedicosService } from "src/app/core/http/services/datos-medicos.service";
import { AlergiaItem } from "src/app/models/AlergiaItem";
import { DatosMedicos } from "src/app/models/datos-medicos";
import { EnfermedadItem } from "src/app/models/Enfermedaditem";
import { MedicalDataModel } from "src/app/models/medical-data-model";

@Component({
  selector: "app-datos-medicos",
  templateUrl: "./datos-medicos.component.html",
  styleUrls: ["./datos-medicos.component.scss"],
})
export class DatosMedicosComponent implements OnInit {
  datosGeneralesImage: string = "assets/images/datosgenerales.png";
  alergiasImage: string = "assets/images/alergias.png";
  diagnosticosImage: string = "assets/images/diagnosticosPrevios.png";
  medicalDataModel = new MedicalDataModel();
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

  constructor(
    private _service: DatosMedicosService,
    private _router: Router,
    private route: ActivatedRoute,
    private _serviceDatosGenerales: DatosGeneralesPacienteService
  ) {}

  ngOnInit() {
    this.ObtenerDatosGenerales();
  }

  registerDatosMedicos() {
    //console.log(this.datos);
    this._service.registerMedicalData(this.medicalDataModel).subscribe(
      (data) => {
        console.log("Datos actualizados");
      },
      (error) => {
        console.log("exception ocurred");
      }
    );
  }
  ObtenerDatosGenerales() {
    this._serviceDatosGenerales
      .getDatosGenerales()
      .subscribe((data) => (this.medicalDataModel = data));
  }

  alergiasItems: AlergiaItem[] = [];
  enfermedadesItems: EnfermedadItem[] = [];

  agregarAlergias() {
    var alergiaAux = {
      nombreAlergia: "",
    };
    this.alergiasItems.push(alergiaAux);
  }
  eliminarAlergia(alergiaId: number) {
    this.alergiasItems.splice(alergiaId, 1);
  }
  agregarDiagnosticos() {
    var diagnosticosAux = {
      nombreEnfermedad: "",
    };
    this.enfermedadesItems.push(diagnosticosAux);
  }
  eliminarDiagnosticos(diagnosticoId: number) {
    this.enfermedadesItems.splice(diagnosticoId, 1);
  }
  guardarAlergias() {
    this.alergiasItems.forEach((element) => {
      console.log(element);
    });
  }
  guardarDiagnosticos() {
    for (var i = 0; i < this.enfermedadesItems.length; i++) {
      console.log(this.enfermedadesItems[i]);
    }
  }
}
