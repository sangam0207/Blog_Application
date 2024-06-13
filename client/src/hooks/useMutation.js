import { useState } from "react";
import { toast } from "sonner";

const useMutate = (apiFunction, { onSuccess, onError } = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (payload) => {
    setIsError(false);
    setError("");
    try {
      setIsLoading(true);
      const res = await apiFunction(payload);
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
    }
  };

  return { data, isLoading, isError, error, mutate };
};

export default useMutate;
