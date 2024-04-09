export interface IJob {
  _id: string;
  company: string;
  position: string;
  jobStatus: string;
  jobType: string;
  jobLocation?: string;
  createdAt: Date;
  joblink?: string;
  updatedAt: Date;
  createdBy: string;
}
