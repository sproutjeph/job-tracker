export interface IJob {
  id: string;
  company: string;
  position: string;
  status: string;
  jobtype: string;
  location?: string;
  date: Date;
  joblink?: string;
}

export type IJobFields = {
  company: string;
  position: string;
  status: string;
  jobtype: string;
  location: string;
  joblink?: string;
};
