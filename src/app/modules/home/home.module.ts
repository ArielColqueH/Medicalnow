import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
} from "@angular/material";
import { HeaderComponent } from "./../../layout/header/header.component";
import { FooterComponent } from "./../../layout/footer/footer.component";
import { LoginComponent } from "./../../modules/home/pages/login/login.component";
import { HomeComponent } from "./../../modules/home/pages/home/home.component";
import { LayoutComponent } from "./../../layout/layout.component";
import { MainComponent } from "./../../layout/main/main.component";
import { SidebarComponent } from "./../../layout/sidebar/sidebar.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { RecetasComponent } from "./pages/home/recetas/recetas.component";
import { LaboratoriosComponent } from "./pages/home/laboratorios/laboratorios.component";
import { ConfiguracionesComponent } from "./pages/home/configuraciones/configuraciones.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AsistenciaBaseComponent } from "./pages/home/asistencia-base/asistencia-base.component";
import { AsistenciaMedicaComponent } from "./pages/home/asistencia-base/asistencia-medica/asistencia-medica.component";
import { ListaEspecialidadesComponent } from "./pages/home/asistencia-base/asistencia-medica/lista-especialidades/lista-especialidades.component";
import { ListaEspecialistasComponent } from "./pages/home/asistencia-base/asistencia-medica/lista-especialidades/lista-especialistas/lista-especialistas.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { HistorialBaseComponent } from "./pages/home/historial-base/historial-base.component";
import { HistorialListaComponent } from "./pages/home/historial-base/historial-lista/historial-lista.component";
import { HistorialCompletoComponent } from "./pages/home/historial-base/historial-lista/historial-completo/historial-completo.component";
import { ConsultasBaseComponent } from "./pages/home/consultas-base/consultas-base.component";
import { ConsultasListaComponent } from "./pages/home/consultas-base/consultas-lista/consultas-lista.component";
import { ConsultaIndividualComponent } from "./pages/home/consultas-base/consultas-lista/consulta-individual/consulta-individual.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LayoutComponent,
    MainComponent,
    SidebarComponent,
    RecetasComponent,
    LaboratoriosComponent,
    ConfiguracionesComponent,
    AsistenciaBaseComponent,
    AsistenciaMedicaComponent,
    ListaEspecialidadesComponent,
    ListaEspecialistasComponent,
    RegistroComponent,
    HistorialBaseComponent,
    HistorialListaComponent,
    HistorialCompletoComponent,
    ConsultasBaseComponent,
    ConsultasListaComponent,
    ConsultaIndividualComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
  ],
})
export class HomeModule {}
