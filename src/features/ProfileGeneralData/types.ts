import { Patient } from "../../types/Patient";

export interface FeatureProfileGeneralDataProps {
  initialValues?: Partial<Patient>;
  externalCallback?: () => void;
}
