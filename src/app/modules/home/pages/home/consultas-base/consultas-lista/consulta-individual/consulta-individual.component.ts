import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ChatMensajeService } from "src/app/core/http/services/chat-mensaje.service";
import { ChatPacienteService } from "src/app/core/http/services/chat-paciente.service";
import { ChatPacienteJson } from "src/app/models/ChatPacienteJson";

@Component({
  selector: "app-consulta-individual",
  templateUrl: "./consulta-individual.component.html",
  styleUrls: ["./consulta-individual.component.scss"],
})
export class ConsultaIndividualComponent implements OnInit {
  chat = new ChatPacienteJson();
  fileToUpload: File = null;
  nombre: string = "";
  Url: string = "";
  tipoArchivo: string = "";
  nombreArchivo: string = "";

  mensaje: string = "";

  // chat: ChatPacienteJson = {
  //   doctor: "Doctor Who",
  //   specialty: "Odontologo",
  //   content: [
  //     {
  //       roleId: 0,
  //       message: "Doctor , comi pan y me hizo mal",
  //     },
  //     {
  //       roleId: 1,
  //       message: "Hola como es , apate de eso comio algo?",
  //     },
  //     {
  //       roleId: 0,
  //       message: "no doctor",
  //     },
  //     {
  //       roleId: 0,
  //       message: "no comi nada mas",
  //     },
  //     {
  //       roleId: 1,
  //       message: "Entonces lo que necesito es un poco mas de informacion",
  //     },
  //     {
  //       roleId: 0,
  //       message: "Doctor , comi pan y me hizo mal",
  //     },
  //     {
  //       roleId: 1,
  //       message: "Hola como es , apate de eso comio algo?",
  //     },
  //     {
  //       roleId: 0,
  //       message: "no doctor",
  //     },
  //     {
  //       roleId: 0,
  //       message: "no comi nada mas",
  //     },
  //     {
  //       roleId: 1,
  //       message: "Entonces lo que necesito es un poco mas de informacion",
  //     },
  //   ],
  // };

  constructor(
    public dialog: MatDialog,
    private _service: ChatPacienteService,
    private _serviceMessage: ChatMensajeService
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service.listChat().subscribe((data) => (this.chat = data));
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
  enviarMensaje() {
    console.log(this.mensaje);
    this.mensaje = "";
    this._serviceMessage.sendMenssage().subscribe((data) => (this.chat = data));
  }
}
