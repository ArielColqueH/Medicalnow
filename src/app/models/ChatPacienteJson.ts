import { ConversationModel } from "./ConversationModel";
import { DoctorNameModel } from "./DoctorNameModel";
import { DoctorSpecialtyNameModel } from "./DoctorSpecialtyNameModel";

export class ChatPacienteJson {
  doctorInfo: DoctorNameModel = new DoctorNameModel();
  content: ConversationModel[] = [];
}
