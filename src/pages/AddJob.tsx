/* eslint-disable @typescript-eslint/no-explicit-any */
import FormSelectRow from "@/components/FormSelectRow";
import SubmitButton from "@/components/SubmitButton";
import { JOB_STATUS, JOB_TYPE } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import FormRow from "@/components/FormRow";
import { Form, redirect } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axiosInstance";
import { toast } from "sonner";

export const addJobAction =
  (queryClient: QueryClient) =>
  async ({ request }: any) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    const job = {
      position: data.position,
      company: data.company,
      jobLocation: data.location,
      jobType: data.type,
      jobStatus: data.status,
      jobLink: data.link,
    };

    try {
      await axiosInstance.post("/create-job", job);
      queryClient.invalidateQueries({ queryKey: ["all-jobs"] });
      toast.success("Job created successfully");
      return redirect("all-jobs");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

const AddJob = () => {
  return (
    <div className="sm:mx-8 mx-4">
      <Card className="p-4 sm:p-6 mt-20 ">
        <h1 className="mb-6 text-xl">Add Job</h1>
        <Form
          className=" grid lg:grid-cols-3 gap-6 md:grid-cols-2"
          method="post"
        >
          <FormRow labelText="Position" name="position" type="text" />
          <FormRow labelText="Company" name="company" type="text" />
          <FormRow labelText="Job Location" name="location" type="text" />
          <FormRow labelText="Job Link" name="link" type="text" />
          <FormSelectRow
            labelText="Job status"
            name="status"
            list={Object.values(JOB_STATUS)}
            defaultValue={JOB_STATUS.PENDING}
          />
          <FormSelectRow
            labelText="Job Type"
            name="type"
            list={Object.values(JOB_TYPE)}
            defaultValue={JOB_TYPE.FULL_TIME}
          />
          <SubmitButton className="lg:mt-[35px]" />
        </Form>
      </Card>
    </div>
  );
};

export default AddJob;
