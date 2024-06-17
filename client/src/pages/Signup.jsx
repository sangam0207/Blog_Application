import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/user.api";
import useMutate from "../hooks/useMutation";
import { signUpSchema } from "../Schema";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signup = () => {
  const navigate = useNavigate();

  const { mutate: signupMutate, isLoading, isError, error } = useMutate(signup, {
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => {
      console.error("Signup error:", error);
    },
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    signupMutate(values);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Register here
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                    <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                    <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={isLoading || isSubmitting}
                  >
                    {isLoading || isSubmitting ? "Signing up..." : "Sign up"}
                  </button>
                </div>
                {isError && (
                  <p className="text-center text-red-600 mt-4">
                    {error?.message || "An error occurred"}
                  </p>
                )}
                <p>
                  Already registered?{" "}
                  <Link to="/login" className="text-blue-600 underline">
                    Back to Login
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

export default Signup;
