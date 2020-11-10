import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-datos-medicos",
  templateUrl: "./datos-medicos.component.html",
  styleUrls: ["./datos-medicos.component.scss"],
})
export class DatosMedicosComponent implements OnInit {
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
  constructor() {}

  ngOnInit() {}
}
