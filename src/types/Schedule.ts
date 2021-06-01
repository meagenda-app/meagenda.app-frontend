import { Patient } from "./Patient";

// Model
export interface Schedule {
  id: string;
  title: string;
  description: string;
  startDate: string | Date;
  endDate: string | Date;
  patient: Partial<Patient>;
  professional: Partial<Patient>;
  clerk: Partial<Patient>;
  establishment: string;
}
