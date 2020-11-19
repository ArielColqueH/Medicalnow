import { DialogsModule } from "../modules/dialogs/dialogs.module";
import { DiagnosisModel } from "./diagnosis-model";
import { PacienteData } from "./paciente-data";

export class HistorialMedico {
  diagnosis: string;
  patient_data = new PacienteData();
  prescriptionId: number[];
}
