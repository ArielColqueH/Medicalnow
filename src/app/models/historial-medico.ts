import { DialogsModule } from "../modules/dialogs/dialogs.module";
import { DescriptionModel } from "./description-model";
import { DiagnosisModel } from "./diagnosis-model";
import { MedicalDataModel } from "./medical-data-model";
import { PacienteData } from "./paciente-data";

export class HistorialMedico {
  diagnosis = new DiagnosisModel();
  patient_data = new PacienteData();
  prescriptionId: number[];
  medical_data = new MedicalDataModel();
  allergies = new DescriptionModel();
  background = new DescriptionModel();
}
