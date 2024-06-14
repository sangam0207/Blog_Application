import { useState } from "react";
import { toast } from "react-toastify";

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
      setError(error.message || "An error occurred");
      toast.error(error?.message || "An error occurred");
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
