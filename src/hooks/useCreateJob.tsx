import { axiosInstance } from "@/lib/axiosInstance";
import { IJob } from "@/lib/types";
import { queryClient } from "@/providers/queryClient";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface IAxiosReturnType {
  message: string;
  job: IJob;
}

async function createJob(job: IJob): Promise<IAxiosReturnType> {
  const { data } = await axiosInstance.post(`/create-job`, job);

  return data;
}

const useCreateJob = (job: IJob) => {
  const mutation = useMutation({
    mutationFn: () => createJob(job),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-jobs"] });
      toast.success("Job created successfully");
    },
  });

  return mutation;
};

export default useCreateJob;
