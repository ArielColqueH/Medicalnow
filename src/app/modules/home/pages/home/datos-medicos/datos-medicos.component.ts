import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { DatosMedicosService } from 'src/app/core/http/services/datos-medicos.service';
import { DatosMedicos } from 'src/app/models/datos-medicos';

@Component({
  selector: "app-datos-medicos",
  templateUrl: "./datos-medicos.component.html",
  styleUrls: ["./datos-medicos.component.scss"],
})
export class DatosMedicosComponent implements OnInit {
  datosGeneralesImage: string = "assets/images/datosgenerales.png";
  alergiasImage: string = "assets/images/alergias.png";
  diagnosticosImage: string = "assets/images/diagnosticosPrevios.png";


  datos = new DatosMedicos();
  grupoSanguineo: string[] = [
    "O negativo",
    "O positivo",
    "A negativo",
    "A positivo",
    "B negativo",
    "B positivo",
    "AB negativo",
    "AB positivo",
  ];
  
  constructor(private _service: DatosMedicosService,
    private _router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {}

  


  registerDatosMedicos(){
    this._service.registerMedicalData(this.datos).subscribe(
      
      (data)=>{
        console.log("Datos actualizados")
      },
      (error) =>{
        console.log("exception ocurred");
      }
    )
  }
  alergiasItems: string[] = [];
  enfermedadesItems: string[] = [];

  agregarAlergias() {
    var alergiaAux = "";
    this.alergiasItems.push(alergiaAux);
  }
  eliminarAlergia(alergiaId: number) {
    this.alergiasItems.splice(alergiaId, 1);
  }
  agregarDiagnosticos() {
    var diagnosticosAux = "";
    this.enfermedadesItems.push(diagnosticosAux);
  }
  eliminarDiagnosticos(diagnosticoId: number) {
    this.enfermedadesItems.splice(diagnosticoId, 1);
  }
  guardarAlergias() {
    this.alergiasItems.forEach((element) => {
      console.log();
    });
  }
  guardarDiagnosticos() {
    this.enfermedadesItems.forEach((element) => {
      console.log();
    });
  }

}