import { Schedule as ScheduleBase } from "../../types/Schedule";
import { Patient as PatientBase } from "../../../patients/types/Patient";

export interface Patient extends Partial<PatientBase> {}

export interface Schedule extends Partial<ScheduleBase> {}

// Components Props
export interface FormScheduleRegisterProps {
  initialValues?: Partial<Schedule>;
  externalCallback?: () => void;
}
