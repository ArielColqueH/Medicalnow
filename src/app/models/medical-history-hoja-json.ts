import { DoctorNameModel } from "./DoctorNameModel";
import { MedicalHistoryDateListModel } from "./medical-history-date-list-model";

export class MedicalHistoryHojaJSON {
  doctorInfo = new DoctorNameModel();
  content: MedicalHistoryDateListModel[] = [];
}
