import { MedicalHistoryDateListModel } from "./medical-history-date-list-model";

export class MedicalHistoryHojaJSON {
  doctorInfo: DoctorNameModel;
  content: MedicalHistoryDateListModel[] = [];
}
