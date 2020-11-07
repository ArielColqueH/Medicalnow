import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpecialtieslistService } from "src/app/core/http/services/specialtieslist.service";
import { DoctorSpecialtyModel } from "src/app/models/doctor-specialty-model";
import { ListEspecialist } from "src/app/models/ListaEspecialista";
import { MatDialog } from "@angular/material/dialog";
import { MensajeAEspecialistaComponent } from "src/app/modules/dialogs/mensaje-a-especialista/mensaje-a-especialista.component";
import { SpecialtyModel } from "src/app/models/specialty-model";
import { HostListener } from "@angular/core";

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
  nombreEspecialidad: SpecialtyModel;

  listaEspecialista: DoctorSpecialtyModel[] = [];
  id: string = "";

  constructor(
    private _service: SpecialtieslistService,
    private _route: ActivatedRoute,
    private _router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    //this.nombreEspecialidad = this.listaEspecialista[0].specialtyName;
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    //console.log("id page : " + this._route.snapshot.paramMap.get("id"));
    this._service
      .listSpecialties(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.listaEspecialista = data));
  }
  openDialog() {
    const dialogRef = this.dialog.open(MensajeAEspecialistaComponent, {
      width: "600px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  @HostListener("window:beforeunload", ["$event"])
  clearLocalStorage(event) {
    localStorage.clear();
  }
}
