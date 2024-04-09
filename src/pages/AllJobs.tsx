import FormRow from "@/components/FormRow";
import FormSelectRow from "@/components/FormSelectRow";
import JobCard from "@/components/JobCard";
import SubmitButton from "@/components/SubmitButton";
import { Card } from "@/components/ui/card";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { IJob } from "@/lib/types";
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from "@/lib/utils";
import { Form } from "react-router-dom";

const AllJobs = () => {
  const { data } = useGetAllJobs();
  console.log(data?.jobs);
  return (
    <div className="">
      <Card className="p-4 mt-4 sm:p-6 md:p-8">
        <Form method="post" className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <FormRow labelText="Search" type="text" name="search" />
          <FormSelectRow
            labelText="Job Status"
            name="status"
            list={Object.values(JOB_STATUS)}
            defaultValue={JOB_STATUS.PENDING}
          />
          <FormSelectRow
            labelText="Job Type"
            name="status"
            list={Object.values(JOB_TYPE)}
            defaultValue={JOB_TYPE.FULL_TIME}
          />
          <FormSelectRow
            labelText="Sort"
            list={Object.values(JOB_SORT_BY)}
            name="status"
            defaultValue="All"
          />
          <div className="col-span-2 md:col-span-1 md:col-start-4">
            <SubmitButton />
          </div>
        </Form>
      </Card>
      <h1 className="mt-8 text-xl">All Jobs</h1>

      <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3">
        {data?.jobs?.map((job: IJob) => (
          <JobCard
            key={job._id}
            job={{
              company: job.company,
              position: job.position,
              jobLocation: job.jobLocation,
              createdAt: new Date(job.createdAt),
              jobType: job.jobType,
              jobStatus: job.jobStatus,
              joblink: "https://www.google.com",
              _id: job._id,
              updatedAt: new Date(job.updatedAt),
              createdBy: job.createdBy,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default AllJobs;
