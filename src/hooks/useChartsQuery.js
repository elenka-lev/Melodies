import {  useQuery } from "@tanstack/react-query"
import { getTopCharts } from "../api/chartsApi.js";

export const useChartsQuery = () => {
  return useQuery({
    queryKey: ['charts'],
    queryFn: getTopCharts,
  });
}