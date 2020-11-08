import { ConversationModel } from "./ConversationModel";
import { DoctorSpecialtyNameModel } from "./DoctorSpecialtyNameModel";

export class ChatPacienteJson {
  doctorInfo: DoctorSpecialtyNameModel;
  content: ConversationModel[];
}
