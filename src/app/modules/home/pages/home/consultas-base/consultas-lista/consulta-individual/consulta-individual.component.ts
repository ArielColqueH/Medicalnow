import { HttpClient } from "@angular/common/http";
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
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: string;

  mensaje: string = "";

  chat = new ChatPacienteJson();
  mensajeChat = new PatientMessageModel();
  constructor(
    public dialog: MatDialog,
    private _service: ChatPacienteService,
    private _serviceMessage: ChatMensajeService,
    private _route: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service
      .listChat(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.chat = data));
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.imageName = event.target.files[0].name;
    console.log(event.target.files[0].name);
  }

  enviarMensaje(doctorSpecialtyId: number) {
    this.imageName = "";
    console.log(this.selectedFile);
    const uploadImageData = new FormData();

    this.httpClient
      .post("http://localhost:8080/image/upload", uploadImageData, {
        observe: "response",
      })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = "Image uploaded successfully";
        } else {
          this.message = "Image not uploaded successfully";
        }
      });

    // this.mensajeChat = {
    //   doctorSpecialtyId: doctorSpecialtyId,
    //   message: this.mensaje,
    // };
    // this._serviceMessage
    //   .sendMenssage(this.mensajeChat)
    //   .subscribe((data) => (this.chat = data));
    // this.mensaje = "";
    // window.location.reload();
  }
}
