/* eslint-disable @typescript-eslint/no-explicit-any */
import FormSelectRow from "@/components/FormSelectRow";
import SubmitButton from "@/components/SubmitButton";
import { JOB_STATUS, JOB_TYPE } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import FormRow from "@/components/FormRow";
import { Form } from "react-router-dom";

export const addJobAction = async ({ request }: any) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
};

const AddJob = () => {
  return (
    <div className="sm:mx-8 mx-4">
      <Card className="p-4 sm:p-6 mt-20 ">
        <h1 className="mb-6 text-xl">Add Job</h1>
        <Form className=" grid lg:grid-cols-2 gap-6" method="post">
          <FormRow labelText="Position" name="position" type="text" />
          <FormRow labelText="Company" name="company" type="text" />
          <FormRow labelText="Job Location" name="location" type="text" />
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
