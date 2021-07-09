import { Patient } from "../../types/Patient";

export interface FormsMedicalRecordsProps {
  initialValues?: Partial<Patient>;
  externalCallback?: () => void;
}
