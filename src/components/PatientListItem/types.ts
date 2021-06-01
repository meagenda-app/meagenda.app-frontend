import { Patient } from "../../types/Patient";

interface PatientItem extends Partial<Patient> {}

export interface PatientListItemProps {
  data: PatientItem;
  onClick: (props: PatientItem) => void;
  key: string;
}
