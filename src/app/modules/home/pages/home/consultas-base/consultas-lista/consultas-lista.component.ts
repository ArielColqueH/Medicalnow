import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { ConsultasService } from "src/app/core/http/services/consultas.service";
import { Consults } from "src/app/models/Consults";
import { CobroConsultaComponent } from "src/app/modules/dialogs/cobro-consulta/cobro-consulta.component";
import { DarPuntuacionComponent } from "src/app/modules/dialogs/dar-puntuacion/dar-puntuacion.component";

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

  darPuntuacion(consultaId: number) {
    const dialogRef = this.dialog.open(DarPuntuacionComponent, {
      width: "600px",
      data: { consultId: consultaId },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  verificarEstado(estado: number) {
    switch (estado) {
      case 1:
        return "Activo";
        break;
      case 2:
        return "Calificar";
        break;
      case 0:
        return "Concluido";
        break;
    }
  }
}
