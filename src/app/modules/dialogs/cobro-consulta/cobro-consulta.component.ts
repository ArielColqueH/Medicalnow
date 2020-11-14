import { Component, OnInit } from "@angular/core";
import { Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { SpecialtieslistService } from "src/app/core/http/services/specialtieslist.service";
import { DoctorSpecialtyJson } from "src/app/models/DoctorSpecialtyJson";
@Component({
  selector: "app-cobro-consulta",
  templateUrl: "./cobro-consulta.component.html",
  styleUrls: ["./cobro-consulta.component.scss"],
})
export class CobroConsultaComponent implements OnInit {
  aux = this.data.doctorSpecialtyId;
  listaEspecialista = new DoctorSpecialtyJson();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _service: SpecialtieslistService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    //console.log(this.data);
    //this.ObtenerDatos();
  }
  // ObtenerDatos() {
  //   this._service
  //     .listSpecialties(this._route.snapshot.paramMap.get("id"))
  //     .subscribe((data) => (this.listaEspecialista = data));
  // }
}
