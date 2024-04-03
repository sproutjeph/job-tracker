import { FC } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Briefcase, Calendar, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { IJob } from "@/lib/types";
import { formatDateToYYYYMMDD } from "@/lib/utils";

interface JobCardProps {
  job: IJob;
}

const JobCard: FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="">
      <CardHeader className="flex-row items-center gap-4 p-3">
        <div className="flex items-center justify-center w-10 h-10 text-2xl font-extrabold text-white rounded-md bg-primary">
          {job.company.charAt(0)}
        </div>
        <div className="text-sm ">
          <h4>{job.position}</h4>
          <h5 className="font-bold">{job.company}</h5>
        </div>
      </CardHeader>
      <Separator className="mb-3" />
      <CardContent className="grid grid-cols-2 gap-3 pb-3">
        <div className="flex items-center gap-2">
          <Send size={16} />
          <h4 className="text-sm">{job.location}</h4>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <h4 className="text-sm">{formatDateToYYYYMMDD(job?.date)}</h4>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={16} />
          <h4 className="text-sm">{job.jobtype}</h4>
        </div>

        <div className="flex items-center justify-center w-24 text-sm text-white bg-black rounded-md dark:bg-white dark:text-black">
          {job.status}
        </div>
      </CardContent>
      <Separator className="mb-3" />
      <CardFooter className="flex gap-2 pb-3 ">
        <Button size="sm" className="bg-green-800">
          Edit
        </Button>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
        <a href={job.joblink} target="_blank">
          <Button size="sm" variant="secondary" className="">
            Job Link
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
