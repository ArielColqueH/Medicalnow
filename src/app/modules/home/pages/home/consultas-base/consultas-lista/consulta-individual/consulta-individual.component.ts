import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { ChatArchivoService } from "src/app/core/http/services/chat-archivo.service";
import { ChatMensajeService } from "src/app/core/http/services/chat-mensaje.service";
import { ChatPacienteService } from "src/app/core/http/services/chat-paciente.service";
import { ObtenerImagenService } from "src/app/core/http/services/obtener-imagen.service";
import { ChatPacienteJson } from "src/app/models/ChatPacienteJson";
import { MessageModel } from "src/app/models/MessageModel";

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
  mensajeChat = new MessageModel();
  constructor(
    public dialog: MatDialog,
    private _service: ChatPacienteService,
    private _serviceMessage: ChatMensajeService,
    private _serviceFile: ChatArchivoService,
    private _servicegetFile: ObtenerImagenService,
    private _route: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
    this.getImage();
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
    if (this.mensaje == "") {
      this.imageName = "";
      console.log(this.selectedFile);
      const uploadImageData = new FormData();
      uploadImageData.append(
        "imageFile",
        this.selectedFile,
        this.selectedFile.name
      );
      this._serviceFile.sendFile(uploadImageData).subscribe((response) => {
        if (response.status === 200) {
          this.message = "Image uploaded successfully";
        } else {
          this.message = "Image not uploaded successfully";
        }
      });
    } else {
      this.mensajeChat = {
        consultId: this._route.snapshot.paramMap.get("id"),
        message: this.mensaje,
      };
      this._serviceMessage
        .sendMenssage(this.mensajeChat)
        .subscribe((data: any) => console.log(data));
      this.mensaje = "";
    }

    // this.httpClient
    //   .post("http://localhost:8008/api/v1/chat/image/upload", uploadImageData, {
    //     observe: "response",
    //   })
    //   .subscribe((response) => {
    //     if (response.status === 200) {
    //       this.message = "Image uploaded successfully";
    //     } else {
    //       this.message = "Image not uploaded successfully";
    //     }
    //   });

    window.location.reload();
  }

  getImage() {
    this._servicegetFile.getImage().subscribe((res) => {
      this.retrieveResonse = res;
      this.base64Data = this.retrieveResonse.picByte;
      this.retrievedImage = "data:image/jpeg;base64," + this.base64Data;
    });
  }
}
