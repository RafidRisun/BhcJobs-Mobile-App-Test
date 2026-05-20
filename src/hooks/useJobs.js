import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../api/jobsApi";

export const useJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    staleTime: 1000 * 60 * 5,
  });
};
