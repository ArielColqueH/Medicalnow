import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { ConsultasService } from "src/app/core/http/services/consultas.service";
import { Consults } from "src/app/models/Consults";
import { CobroConsultaComponent } from "src/app/modules/dialogs/cobro-consulta/cobro-consulta.component";

@Component({
  selector: "app-consultas-lista",
  templateUrl: "./consultas-lista.component.html",
  styleUrls: ["./consultas-lista.component.scss"],
})
export class ConsultasListaComponent implements OnInit {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: ConsultasService,
    public dialog: MatDialog
  ) {}

  consultas: Consults[];
  ngOnInit() {
    this.ObtenerDatos();
  }

  irAChat(consultaId: number) {
    this._router.navigate(["consulta-individual/" + consultaId], {
      relativeTo: this._route,
    });
  }

  ObtenerDatos() {
    this._service
      .listConsults(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.consultas = data));
  }
}
