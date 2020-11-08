import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { ChatMensajeService } from "src/app/core/http/services/chat-mensaje.service";
import { ChatPacienteService } from "src/app/core/http/services/chat-paciente.service";
import { ChatPacienteJson } from "src/app/models/ChatPacienteJson";
import { PatientMessageModel } from "src/app/models/PatientMessageModel";

@Component({
  selector: "app-consulta-individual",
  templateUrl: "./consulta-individual.component.html",
  styleUrls: ["./consulta-individual.component.scss"],
})
export class ConsultaIndividualComponent implements OnInit {
  fileToUpload: File = null;
  nombre: string = "";
  Url: string = "";
  tipoArchivo: string = "";
  nombreArchivo: string = "";

  mensaje: string = "";

  // chat: ChatPacienteJson = {
  //   doctorInfo: {
  //     firstName: "Page",
  //     firstSurname: "Paslow",
  //     secondSurname: "Bleas",
  //     specialtyName: "Alergologia",
  //   },
  //   content: [
  //     {
  //       roleId: 2,
  //       message: "Doctor , comi pan y me hizo mal",
  //     },
  //     {
  //       roleId: 2,
  //       message: "Hola como es , apate de eso comio algo?",
  //     },
  //     {
  //       roleId: 3,
  //       message: "no doctor",
  //     },
  //   ],
  // };
  chat = new ChatPacienteJson();
  mensajeChat = new PatientMessageModel();
  constructor(
    public dialog: MatDialog,
    private _service: ChatPacienteService,
    private _serviceMessage: ChatMensajeService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service
      .listChat(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.chat = data));
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = null;
    this.nombreArchivo = "";
    this.tipoArchivo = "";

    this.fileToUpload = file.item(0);
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.Url = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
    this.nombre = this.fileToUpload.name.split(".")[0];
    this.nombreArchivo = this.fileToUpload.name;
  }

  verificarTipoTam(tipo: string, tam: number): boolean {
    console.log(tipo);
    if (
      (tipo ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        tipo ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        tipo === "video/mp4" ||
        tipo ===
          "application/vnd.openxmlformats-officedocument.presentationml.presentation" ||
        tipo === "application/pdf" ||
        tipo === "audio/mpeg") &&
      tam / 1000000 < 10
    ) {
      console.log(tam);
      return true;
    }
  }
  enviarMensaje(doctorSpecialtyId: number) {
    this.mensajeChat = {
      doctorSpecialtyId: doctorSpecialtyId,
      message: this.mensaje,
    };
    this._serviceMessage
      .sendMenssage(this.mensajeChat)
      .subscribe((data) => (this.chat = data));
    this.mensaje = "";
  }
}
