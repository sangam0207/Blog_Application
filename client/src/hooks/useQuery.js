import { useEffect, useState } from "react";
import { toast } from "sonner";

const useQuery = (apiFunction, { onSuccess, onError } = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefetching, setIsRefetching] = useState(false);

  const [reload, setReload] = useState(0);

  const refetch = () => setReload((prev) => prev + 1);

  useEffect(() => {
    const fetchData = async () => {
      reload > 0 && setIsRefetching(true);
      setIsError(false);
      setError("");
      try {
        const res = await apiFunction();
        setData(res);
        if (onSuccess) {
          onSuccess(res);
        }
        return res;
      } catch (error) {
        setIsError(true);
        setError(error);
        toast.error(error?.message || error?.response?.data?.message);
        if (onError) {
          onError(error);
        }
        return error;
      } finally {
        setIsLoading(false);
        setIsRefetching(false);
      }
    };
    fetchData();
  }, [reload]);

  return { data, isLoading, isError, error, refetch, isRefetching };
};

export default useQuery;
