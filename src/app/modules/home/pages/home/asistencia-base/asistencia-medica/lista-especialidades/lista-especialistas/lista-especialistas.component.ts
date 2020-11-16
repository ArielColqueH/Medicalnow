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

@Component({
  selector: "app-lista-especialistas",
  templateUrl: "./lista-especialistas.component.html",
  styleUrls: ["./lista-especialistas.component.scss"],
})
export class ListaEspecialistasComponent implements OnInit {
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
      .listSpecialties(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.listaEspecialista = data));
  }
  enviarMensaje() {
    console.log("go messages");
    this._router.navigate([
      "consultas/" + localStorage.getItem("userId") + "/consulta-individual",
    ]);
  }

  solicitarConsulta() {
    const dialogRef = this.dialog.open(CobroConsultaComponent, {
      width: "600px",
      // data: { id: this.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  fixhoursini(hora:string){
    var splitted = hora.split(":",3);
    console.log(splitted);
    console.log(  "sndjnsc"); 
    var horaModi = splitted[0]+":"+splitted[1];
    return horaModi;
  }

  

}
