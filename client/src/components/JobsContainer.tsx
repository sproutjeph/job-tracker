import { useEffect } from "react";
import { useGlobalContext } from "../store/context";
import Job from "./Job";
import Loading from "./Loading";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const {
    numOfPages,
    jobs,
    totalJobs,
    getJobs,
    page,
    isLoading,
    search,
    sort,
    searchType,
    status,
  } = useGlobalContext();

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [search, sort, searchType, status, page]);
  if (isLoading) {
    return <Loading center="center" />;
  }

  if (jobs.length === 0) {
    return (
      <section className="mt-16 ">
        <h2 className="">No Jobs to display</h2>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <h5 className="mb-4 text-2xl tracking-wider capitalize ">
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {jobs.map((job) => (
          <Job
            key={job._id}
            company={job.company}
            createdAt={job.createdAt}
            position={job.position}
            jobLocation={job.jobLocation}
            jobType={job.jobType}
            status={job.status}
            _id={job._id}
          />
        ))}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </section>
  );
};
export default JobsContainer;
