import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axiosInstance";
import { IJob } from "@/lib/types";

interface IAxiosReturnType {
  message: string;
  jobs: IJob[];
}

async function getAllJobs(): Promise<IAxiosReturnType> {
  const { data } = await axiosInstance.get(`/all-jobs`);

  return data;
}

const useGetAllJobs = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["all-jobs"],
    queryFn: () => getAllJobs(),
  });
  return { data, error, isLoading };
};

export default useGetAllJobs;
