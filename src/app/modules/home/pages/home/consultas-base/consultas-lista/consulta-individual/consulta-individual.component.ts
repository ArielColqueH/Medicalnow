import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ChatPacienteJson } from "src/app/models/ChatPacienteJson";

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

  chat: ChatPacienteJson = {
    specialtyName: "Doctor Who",
    specialtyDoctor: "Odontologo",
    body: [
      {
        userIdentity: 0,
        message: "Doctor , comi pan y me hizo mal",
      },
      {
        userIdentity: 1,
        message: "Hola como es , apate de eso comio algo?",
      },
      {
        userIdentity: 0,
        message: "no doctor",
      },
      {
        userIdentity: 0,
        message: "no comi nada mas",
      },
      {
        userIdentity: 1,
        message: "Entonces lo que necesito es un poco mas de informacion",
      },
      {
        userIdentity: 0,
        message: "Doctor , comi pan y me hizo mal",
      },
      {
        userIdentity: 1,
        message: "Hola como es , apate de eso comio algo?",
      },
      {
        userIdentity: 0,
        message: "no doctor",
      },
      {
        userIdentity: 0,
        message: "no comi nada mas",
      },
      {
        userIdentity: 1,
        message: "Entonces lo que necesito es un poco mas de informacion",
      },
    ],
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

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
}
