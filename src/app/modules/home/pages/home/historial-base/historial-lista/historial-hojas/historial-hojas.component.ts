import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { ListaHistorialMedicoHojasService } from "src/app/core/http/services/lista-historial-medico-hojas.service";

@Component({
  selector: "app-historial-hojas",
  templateUrl: "./historial-hojas.component.html",
  styleUrls: ["./historial-hojas.component.scss"],
})
export class HistorialHojasComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public dialog: MatDialog,
    private _service: ListaHistorialMedicoHojasService
  ) {}

  ngOnInit() {}

  irHistorialCompleto(consultId: number) {
    this._router.navigate(["historial-completo/" + consultId], {
      relativeTo: this._route,
    });
  }
}
