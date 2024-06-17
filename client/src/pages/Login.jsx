import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { login } from "../services/user.api";
import useMutate from "../hooks/useMutation";
import { toast } from "sonner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../Schema";

const Login = () => {
  const { setToken, setUserInfo } = useAuth();
  const navigate = useNavigate();

  const { mutate: loginMutate, isLoading, isError, error } = useMutate(login, {
    onSuccess: (response) => {
      if (response.status === 200) {
        setToken(response.data.accessToken);
        setUserInfo(response.data.user);
        navigate("/profile");
      }
    },
    onError: (error) => {
      toast.error(error?.message || error?.response?.data?.message);
    },
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    loginMutate(values);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={isLoading || isSubmitting}
                  >
                    {isLoading || isSubmitting ? "Logging in..." : "Login"}
                  </button>
                </div>
                {isError && (
                  <p className="text-center text-red-600 mt-4">
                    {error?.message || "An error occurred"}
                  </p>
                )}
                <p>
                  New here?{" "}
                  <Link to="/signup" className="text-blue-600 underline">
                    Sign up
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
