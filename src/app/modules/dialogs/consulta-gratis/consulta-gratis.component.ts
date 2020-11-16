import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { PrescriptionListDetailService } from "src/app/core/http/services/prescription-list-detail.service";
@Component({
  selector: "app-consulta-gratis",
  templateUrl: "./consulta-gratis.component.html",
  styleUrls: ["./consulta-gratis.component.scss"],
})
export class ConsultaGratisComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  pagarConsulta() {
    console.log("pagar");
  }
}
