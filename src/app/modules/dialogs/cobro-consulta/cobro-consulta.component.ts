import { Component, OnInit } from "@angular/core";
import { Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { CrearNuevoChatService } from "src/app/core/http/services/crear-nuevo-chat.service";
import { EspecialistaIndividualService } from "src/app/core/http/services/especialista-individual.service";
import { SpecialtieslistService } from "src/app/core/http/services/specialtieslist.service";
import { DoctorSpecialtyIdModel } from "src/app/models/doctor-specialty-id-model";
import { DoctorSpecialtyJson } from "src/app/models/DoctorSpecialtyJson";
import { PaymentModel } from "src/app/models/payment-model";
import { ResponseNewChat } from "src/app/models/response-new-chat";
@Component({
  selector: "app-cobro-consulta",
  templateUrl: "./cobro-consulta.component.html",
  styleUrls: ["./cobro-consulta.component.scss"],
})
export class CobroConsultaComponent implements OnInit {
  newConsultId: number;
  specialtyIdModel = new DoctorSpecialtyIdModel();
  aux = this.data.doctorSpecialtyId;
  payment = new PaymentModel();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _service: EspecialistaIndividualService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _serviceCreateChat: CrearNuevoChatService
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }
  ObtenerDatos() {
    console.log("consultId : " + this.data.doctorSpecialtyId);
    this._service
      .getInformacionEspecialista(this.aux)
      .subscribe((data) => (this.payment = data));
  }
  pagarConsulta() {
    //console.log("id:" + this.data.doctorSpecialtyId);
    this.specialtyIdModel = {
      doctorSpecialtyId: this.data.doctorSpecialtyId,
    };
    this._serviceCreateChat
      .createChat(this.specialtyIdModel)
      .subscribe((data: ResponseNewChat) =>
        this._router.navigate([
          "consultas/" +
            localStorage.getItem("userId") +
            "/consulta-individual/" +
            data.consultId,
        ])
      );
  }
}
