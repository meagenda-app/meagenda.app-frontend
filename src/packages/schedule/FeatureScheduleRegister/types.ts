import { Schedule as ScheduleBase } from "../../../types/Schedule";

// Components Props
export interface FeatureScheduleRegisterProps {
  externalCallback: () => void;
  data: {
    startDate: string;
    endDate: string;
    clerkId: string;
    id?: string;
    establishment?: string;
  };
}

export interface Schedule extends Partial<ScheduleBase> {}
