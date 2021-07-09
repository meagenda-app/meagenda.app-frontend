import { Patient } from "../types/Patient";

interface PatientItem extends Partial<Patient> {}

export interface FeaturePatientListItemProps {
  data: PatientItem;
  onClick: (props: PatientItem) => void;
  key: string;
}
