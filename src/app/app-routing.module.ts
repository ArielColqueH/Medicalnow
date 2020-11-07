import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/auth/guards/auth.guard";
import { MainComponent } from "./layout/main/main.component";
import { AsistenciaBaseComponent } from "./modules/home/pages/home/asistencia-base/asistencia-base.component";
import { AsistenciaMedicaComponent } from "./modules/home/pages/home/asistencia-base/asistencia-medica/asistencia-medica.component";
import { ListaEspecialidadesComponent } from "./modules/home/pages/home/asistencia-base/asistencia-medica/lista-especialidades/lista-especialidades.component";
import { ListaEspecialistasComponent } from "./modules/home/pages/home/asistencia-base/asistencia-medica/lista-especialidades/lista-especialistas/lista-especialistas.component";

import { ConfiguracionesComponent } from "./modules/home/pages/home/configuraciones/configuraciones.component";
import { ConsultasBaseComponent } from "./modules/home/pages/home/consultas-base/consultas-base.component";
import { ConsultaIndividualComponent } from "./modules/home/pages/home/consultas-base/consultas-lista/consulta-individual/consulta-individual.component";
import { ConsultasListaComponent } from "./modules/home/pages/home/consultas-base/consultas-lista/consultas-lista.component";
import { HistorialBaseComponent } from "./modules/home/pages/home/historial-base/historial-base.component";
import { HistorialCompletoComponent } from "./modules/home/pages/home/historial-base/historial-lista/historial-completo/historial-completo.component";
import { HistorialListaComponent } from "./modules/home/pages/home/historial-base/historial-lista/historial-lista.component";
import { HomeComponent } from "./modules/home/pages/home/home.component";
import { LaboratoriosComponent } from "./modules/home/pages/home/laboratorios/laboratorios.component";
import { RecetasComponent } from "./modules/home/pages/home/recetas/recetas.component";
import { LoginComponent } from "./modules/home/pages/login/login.component";
import { RegistroComponent } from "./modules/home/pages/registro/registro.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/login" },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "registro",
    component: RegistroComponent,
  },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "asistencia-medica/:id",
        component: AsistenciaBaseComponent,
        children: [
          {
            path: "",
            component: AsistenciaMedicaComponent,
          },
          {
            path: "lista-especialidades",
            children: [
              {
                path: "",
                component: ListaEspecialidadesComponent,
              },
              {
                path: "lista-especialistas/:id",
                component: ListaEspecialistasComponent,
              },
            ],
          },
        ],
      },
      {
        path: "recetas/:id",
        component: RecetasComponent,
      },
      // {
      //   path: "historial/:id",
      //   component: HistorialListaComponent,
      // },
      {
        path: "historial/:id",
        component: HistorialBaseComponent,
        children: [
          {
            path: "",
            component: HistorialListaComponent,
          },
          {
            path: "historial-completo",
            children: [
              {
                path: "",
                component: HistorialCompletoComponent,
              },
            ],
          },
        ],
      },

      {
        path: "consultas/:id",
        component: ConsultasBaseComponent,
        children: [
          {
            path: "",
            component: ConsultasListaComponent,
          },
          {
            path: "consulta-individual",
            children: [
              {
                path: "",
                component: ConsultaIndividualComponent,
              },
            ],
          },
        ],
      },

      {
        path: "laboratorios/:id",
        component: LaboratoriosComponent,
      },
      {
        path: "configuraciones/:id",
        component: ConfiguracionesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
