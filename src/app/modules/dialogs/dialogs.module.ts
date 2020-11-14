import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { DetallePrescripcionComponent } from "./detalle-prescripcion/detalle-prescripcion.component";
import { FormsModule } from "@angular/forms";
import { CobroConsultaComponent } from "./cobro-consulta/cobro-consulta.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ConsultaGratisComponent } from "./consulta-gratis/consulta-gratis.component";
import { DarPuntuacionComponent } from "./dar-puntuacion/dar-puntuacion.component";
import { RatingModule } from "ng-starrating";

@NgModule({
  declarations: [
    DetallePrescripcionComponent,
    CobroConsultaComponent,
    ConsultaGratisComponent,
    DarPuntuacionComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    RatingModule,
  ],
  entryComponents: [
    DetallePrescripcionComponent,
    CobroConsultaComponent,
    ConsultaGratisComponent,
    DarPuntuacionComponent,
  ],
})
export class DialogsModule {}
