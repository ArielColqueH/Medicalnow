import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpecialtieslistService } from "src/app/core/http/services/specialtieslist.service";
import { DoctorSpecialtyModel } from "src/app/models/doctor-specialty-model";
import { ListEspecialist } from "src/app/models/ListaEspecialista";
import { MatDialog } from "@angular/material/dialog";

import { SpecialtyModel } from "src/app/models/specialty-model";
import { HostListener } from "@angular/core";
import { DoctorSpecialtyJson } from "src/app/models/DoctorSpecialtyJson";
import { CobroConsultaComponent } from "src/app/modules/dialogs/cobro-consulta/cobro-consulta.component";
import { ConsultaGratisComponent } from "src/app/modules/dialogs/consulta-gratis/consulta-gratis.component";
@Component({
  selector: "app-lista-especialistas-gratis",
  templateUrl: "./lista-especialistas-gratis.component.html",
  styleUrls: ["./lista-especialistas-gratis.component.scss"],
})
export class ListaEspecialistasGratisComponent implements OnInit {
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
    this._service
      .listSpecialtiesFree(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.listaEspecialista = data));
  }
  enviarMensaje() {
    console.log("go messages");
    this._router.navigate([
      "consultas/" + localStorage.getItem("userId") + "/consulta-individual",
    ]);
  }

  solicitarConsulta(doctorSpecialtyId: number) {
    const dialogRef = this.dialog.open(ConsultaGratisComponent, {
      width: "600px",
      data: { doctorSpecialtyId: doctorSpecialtyId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
