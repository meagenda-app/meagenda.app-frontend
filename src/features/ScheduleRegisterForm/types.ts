import { Schedule as ScheduleBase } from "../../types/Schedule";
import { Patient as PatientBase } from "../../types/Patient";

export interface Patient extends Partial<PatientBase> {}

export interface Schedule extends Partial<ScheduleBase> {}

// Components Props
export interface FeatureScheduleRegisterFormProps {
  initialValues?: Partial<Schedule>;
  externalCallback?: () => void;
}
