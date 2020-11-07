import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LaboratoryService } from "src/app/core/http/services/laboratory.service";
import { Laboratory } from "src/app/models/Laboratory";
import { ListEspecialist } from "src/app/models/ListaEspecialista";

@Component({
  selector: "app-laboratorios",
  templateUrl: "./laboratorios.component.html",
  styleUrls: ["./laboratorios.component.scss"],
})
export class LaboratoriosComponent implements OnInit {
  listlaboratory: Laboratory[];
  aux: any;

  /*laboratoryList: Laboratory[] = [
    {
      laboratoryId: 1,
      laboratoryName: "Electrocardiograma",
      laboratoryDoctor: "Tony Stark",
      laboratoryDoctorSpecialist: "Cardiologo",
      laboratoryDate: "11/12/2020",
    },
    {
      laboratoryId: 2,
      laboratoryName: "Analisis",
      laboratoryDoctor: "Rey richards",
      laboratoryDoctorSpecialist: "Dentista",
      laboratoryDate: "15/12/2020",
    },
  ];*/

  constructor(private _service: LaboratoryService, private _router: Router) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service
      .listLaboratory()
      .subscribe((data) => (this.listlaboratory = data));
    this.aux = this.listlaboratory;
  }
  @HostListener("window:beforeunload", ["$event"])
  clearLocalStorage(event) {
    localStorage.clear();
  }
}
