/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/lib/axiosInstance";
import { QueryClient } from "@tanstack/react-query";
import { redirect } from "react-router-dom";
import { toast } from "sonner";

export const deleteJobAction =
  (queryClient: QueryClient) =>
  async ({ params }: { params: any }) => {
    try {
      await axiosInstance.delete(`/delete-job/${params.id}`);
      queryClient.invalidateQueries({ queryKey: ["all-jobs"] });
      toast.success("Job deleted successfully");
    } catch (error: unknown) {
      toast.error((error as Error)?.message);
    }

    return redirect("/dashboard/all-jobs");
  };
