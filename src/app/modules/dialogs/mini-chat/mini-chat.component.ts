import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { ChatPacienteService } from "src/app/core/http/services/chat-paciente.service";
import { ChatPacienteJson } from "src/app/models/ChatPacienteJson";

@Component({
  selector: "app-mini-chat",
  templateUrl: "./mini-chat.component.html",
  styleUrls: ["./mini-chat.component.scss"],
})
export class MiniChatComponent implements OnInit {
  chat = new ChatPacienteJson();
  aux = this.data.prescriptionId;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private _service: ChatPacienteService,
    private _route: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service.listChat(this.aux).subscribe((data) => (this.chat = data));
  }
}
