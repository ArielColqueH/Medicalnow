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
  alergiasItems: string[] = ["pescado", "huevos", "coservantes"];
  enfermedadesItems: string[] = ["hipertension", "diabetes", "presion alta"];
  constructor() {}

  ngOnInit() {}
}
