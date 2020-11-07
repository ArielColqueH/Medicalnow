import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpecialtieslistService } from "src/app/core/http/services/specialtieslist.service";
import { DoctorSpecialtyModel } from "src/app/models/doctor-specialty-model";
import { ListEspecialist } from "src/app/models/ListaEspecialista";
import { MatDialog } from "@angular/material/dialog";

import { SpecialtyModel } from "src/app/models/specialty-model";
import { HostListener } from "@angular/core";
import { DoctorSpecialtyJson } from "src/app/models/DoctorSpecialtyJson";

@Component({
  selector: "app-lista-especialistas",
  templateUrl: "./lista-especialistas.component.html",
  styleUrls: ["./lista-especialistas.component.scss"],
})
export class ListaEspecialistasComponent implements OnInit {
  /*listaEspecialista: ListEspecialist[] = [
    {
      specialist_id: 1,
      specialist_avatar: "A",
      specialist_name: "Ariel Colque Herrera",
      specialist_score: 4.2,
    },
    {
      specialist_id: 2,
      specialist_avatar: "V",
      specialist_name: "Lizbeth vania Vera",
      specialist_score: 4.8,
    },
  ];*/

  listaEspecialista = new DoctorSpecialtyJson();
  id: string = "";

  constructor(
    private _service: SpecialtieslistService,
    private _route: ActivatedRoute,
    private _router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    //console.log("id page : " + this._route.snapshot.paramMap.get("id"));
    this._service
      .listSpecialties(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.listaEspecialista = data));
  }
  enviarMensaje() {
    console.log("go messages");
    this._router.navigate([
      "consultas/" + localStorage.getItem("userId") + "/consulta-individual",
    ]);
  }
}
