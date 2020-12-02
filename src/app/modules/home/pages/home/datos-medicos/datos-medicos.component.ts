import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DatosGeneralesPacienteService } from "src/app/core/http/services/datos-generales-paciente.service";
import { DatosMedicosService } from "src/app/core/http/services/datos-medicos.service";
import { AlergiaItem } from "src/app/models/AlergiaItem";
import { DatosMedicos } from "src/app/models/datos-medicos";
import { DescriptionModel } from "src/app/models/description-model";
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

  descriptionModelAlergias = new DescriptionModel();
  descriptionModelPrevios = new DescriptionModel();

  constructor(
    private _service: DatosMedicosService,
    private _router: Router,
    private route: ActivatedRoute,
    private _serviceDatosGenerales: DatosGeneralesPacienteService
  ) {}

  ngOnInit() {
    this.ObtenerDatosGenerales();
    this.ObtenerDatosAlergias();
    this.ObtenerDatosPrevios();
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
  ObtenerDatosAlergias() {
    this._serviceDatosGenerales
      .getDatosAlergias()
      .subscribe((data) => (this.descriptionModelAlergias = data));
  }
  ObtenerDatosPrevios() {
    this._serviceDatosGenerales
      .getDatosPrevios()
      .subscribe((data) => (this.descriptionModelPrevios = data));
  }

  alergiasItems: AlergiaItem[] = [];
  enfermedadesItems: EnfermedadItem[] = [];

  agregarAlergias() {
    var alergiaAux = {
      description: "",
    };
    this.descriptionModelAlergias.detail.push(alergiaAux);
  }
  eliminarAlergia(alergiaId: number) {
    this.descriptionModelAlergias.detail.splice(alergiaId, 1);
  }
  agregarDiagnosticos() {
    var diagnosticosAux = {
      description: "",
    };
    this.descriptionModelPrevios.detail.push(diagnosticosAux);
  }
  eliminarDiagnosticos(diagnosticoId: number) {
    this.descriptionModelPrevios.detail.splice(diagnosticoId, 1);
  }
  guardarAlergias() {
    this._service.registerAlergiasData(this.descriptionModelAlergias).subscribe(
      (data) => {
        console.log("Datos actualizados");
      },
      (error) => {
        console.log("exception ocurred");
      }
    );
  }
  guardarDiagnosticos() {
    this._service.registerPreviosData(this.descriptionModelPrevios).subscribe(
      (data) => {
        console.log("Datos actualizados");
      },
      (error) => {
        console.log("exception ocurred");
      }
    );
  }
}
