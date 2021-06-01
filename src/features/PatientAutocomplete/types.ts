import { Patient as PatientBase } from "../../types/Patient";

export interface Patient extends PatientBase {}

// Components Props
export interface FeaturePatientAutocompleteProps {
  handleSelect: (patiend?: Patient) => void;
  defaultValue?: Patient | string;
  label: string;
}
