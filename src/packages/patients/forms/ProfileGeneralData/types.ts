import { Patient } from "../../types/Patient";

export interface FormProfileGeneralDataProps {
  initialValues?: Partial<Patient>;
  externalCallback?: () => void;
}
