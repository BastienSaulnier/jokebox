import React, { useEffect } from "react";
import "./index.scss";

import { useDispatch } from "react-redux";
import { useFormikContext, Formik, Form } from "formik";

import Loader from "react-loader-spinner";

import AppButton from "../AppButton/index";

export interface IAppFormProps {
  formValidationSchema?: any;
  formInitialValues?: any;
  formButtonLabel?: string;
  formAction?: any;
  children?: any;
}

export interface FormikContextProps {
  formAction?: any;
}

function FormikContext(props: FormikContextProps) {
  const { formAction } = props;
  const dispatch = useDispatch();
  const {
    setSubmitting,
    isSubmitting,
    setErrors,
    isValid,
    values,
  } = useFormikContext();

  useEffect(() => {
    setTimeout(() => {
      if (isValid && isSubmitting) {
        dispatch(formAction(values))
          .then((res) => {
            const { error } = res.action.payload.data;
            setSubmitting(false);
            if (error !== null) {
              setErrors(error);
            }
          })
          .catch(async () => {
            setSubmitting(false);
          });
      }
    }, 500);
  }, [
    setSubmitting,
    isSubmitting,
    formAction,
    setErrors,
    dispatch,
    isValid,
    values,
  ]);
  return null;
}

export default function AppForm(props: IAppFormProps) {
  const {
    formValidationSchema,
    formInitialValues,
    formButtonLabel,
    formAction,
    children,
  } = props;

  return (
    <Formik
      validationSchema={formValidationSchema}
      initialValues={formInitialValues}
      onSubmit={() => {
        setTimeout(() => {}, 1000);
      }}
    >
      {({ dirty, isValid, isSubmitting }) => (
        <>
          <FormikContext formAction={formAction} />
          <Form>
            {children}
            <AppButton
              buttonType="submit"
              buttonClassName={
                dirty && isValid ? "ActiveButton" : "InactiveButton"
              }
              buttonLabel={
                isSubmitting ? (
                  <Loader
                    type="ThreeDots"
                    color="white"
                    height={6}
                    width={40}
                  />
                ) : (
                  formButtonLabel
                )
              }
            />
          </Form>
        </>
      )}
    </Formik>
  );
}
