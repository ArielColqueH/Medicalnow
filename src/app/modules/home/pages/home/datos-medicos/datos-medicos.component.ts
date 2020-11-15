import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-datos-medicos",
  templateUrl: "./datos-medicos.component.html",
  styleUrls: ["./datos-medicos.component.scss"],
})
export class DatosMedicosComponent implements OnInit {
  datosGeneralesImage: string = "assets/images/datosgenerales.png";
  alergiasImage: string = "assets/images/alergias.png";
  diagnosticosImage: string = "assets/images/diagnosticosPrevios.png";
  selectedValueCombobox: string;
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
  alergiasItems: string[] = [];
  enfermedadesItems: string[] = [];
  constructor() {}

  ngOnInit() {}

  agregarAlergias() {
    var alergiaAux = "";
    this.alergiasItems.push(alergiaAux);
  }
  eliminarAlergia(alergiaId: number) {
    this.alergiasItems.splice(alergiaId, 1);
  }
  agregarDiagnosticos() {
    var diagnosticosAux = "";
    this.enfermedadesItems.push(diagnosticosAux);
  }
  eliminarDiagnosticos(diagnosticoId: number) {
    this.enfermedadesItems.splice(diagnosticoId, 1);
  }
  guardarAlergias() {
    this.alergiasItems.forEach((element) => {
      console.log();
    });
  }
  guardarDiagnosticos() {
    this.enfermedadesItems.forEach((element) => {
      console.log();
    });
  }
}
