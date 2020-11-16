import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RegistroService } from "src/app/core/http/services/registro.service";
import { SpecialtiesService } from "src/app/core/http/services/specialties.service";
import { ListaEspecialidades } from "src/app/models/ListaEspecialidades";
import { SpecialtyModel } from "src/app/models/specialty-model";
@Component({
  selector: "app-lista-especialidades",
  templateUrl: "./lista-especialidades.component.html",
  styleUrls: ["./lista-especialidades.component.scss"],
})
export class ListaEspecialidadesComponent implements OnInit {
  listaEspecialidades: SpecialtyModel[];
  //aux: any;

  constructor(
    private _service: SpecialtiesService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service
      .listaSpeciality()
      .subscribe((data) => (this.listaEspecialidades = data));
    //this.aux = this.listaEspecialidades;
  }

  irListaEspecialistas(id: number) {
    console.log(id);
    this._router.navigate(["lista-especialistas/" + id], {
      relativeTo: this.route,
    });
  }

  // @HostListener("window:beforeunload", ["$event"])
  // clearLocalStorage(event) {
  //   localStorage.clear();
  // }
}
