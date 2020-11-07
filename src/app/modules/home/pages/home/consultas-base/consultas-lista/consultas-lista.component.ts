import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ConsultasService } from "src/app/core/http/services/consultas.service";
import { Consults } from "src/app/models/Consults";

@Component({
  selector: "app-consultas-lista",
  templateUrl: "./consultas-lista.component.html",
  styleUrls: ["./consultas-lista.component.scss"],
})
export class ConsultasListaComponent implements OnInit {
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _service: ConsultasService
  ) {}

  consultas: Consults[];
  ngOnInit() {
    this.ObtenerDatos();
  }

  irAChat() {
    this._router.navigate(["consulta-individual"], { relativeTo: this.route });
  }

  ObtenerDatos() {
    this._service.listConsults().subscribe((data) => (this.consultas = data));
  }
}
