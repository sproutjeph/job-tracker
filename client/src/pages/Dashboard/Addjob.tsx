import React from "react";
import { Alert, FormRow, FormRowSelect } from "../../components";
import { useGlobalContext } from "../../store/context";

const Addjob = () => {
  const {
    showAlert,
    isEditing,
    position,
    company,
    jobLocation,
    statusOptions,
    status,
    jobType,
    jobTypeOptions,
    isLoading,
    createJob,
    displayAlert,
    editJob,
    handleChange,
    clearValues,
  } = useGlobalContext();

  const handleChangeJob = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!company || !position) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  }

  return (
    <section className="p-4 bg-white rounded-sm">
      <form className="w-full max-w-full m-0 rounded-none">
        <h3 className="my-6 text-3xl capitalize">
          {isEditing ? "edit job" : "add job"}
        </h3>
        {showAlert && <Alert />}
        <div className="grid gap-[0.5rem] lg:grid-cols-3">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleChangeJob}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleChangeJob}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleChangeJob}
          />
          {/* job status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleChangeJob}
            list={statusOptions}
          />
          {/* job type */}
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleChangeJob}
            list={jobTypeOptions}
          />
          {/* btn container */}
          <div className="flex justify-center items-center gap-[4%]">
            <button
              type="submit"
              className="cursor-pointer text-white bg-mainColor border-transparent rounded-md tracking-wider py-[0.375rem] px-[0.75rem] shadow-md inline-block w-[48%] hover:bg-mainColorDark transition duration-200 "
              disabled={isLoading}
              onClick={handleSubmit}
            >
              submit
            </button>
            <button
              className="cursor-pointer text-white bg-[#627d98] border-transparent rounded-md tracking-wider py-[0.375rem] px-[0.75rem] shadow-md inline-block w-[48%] hover:bg-[#222] transition duration-200"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default Addjob;
