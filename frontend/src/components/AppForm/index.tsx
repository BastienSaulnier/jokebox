import React, { useEffect } from "react";
import "./index.scss";

import { useDispatch } from "react-redux";
import { useFormikContext, Formik, Form } from "formik";

import Loader from "react-loader-spinner";

import AppButton from "../AppButton/index";

export interface FormikContextProps {
  formAction?: any;
  formInitialValues?: any;
}

function FormikContext(props: FormikContextProps) {
  const { formAction, formInitialValues } = props;
  const dispatch = useDispatch();
  const {
    setSubmitting,
    isSubmitting,
    setErrors,
    isValid,
    values,
    setValues,
  } = useFormikContext();

  useEffect(() => {
    setTimeout(() => {
      if (isValid && isSubmitting) {
        dispatch(formAction(values))
          .then((res) => {
            const { error } = res.action.payload.data;
            setSubmitting(false);
            if (error.api) {
              // NEED TO WRITE API ERRORS HANDLE LOGIC
            } else if (error !== null) {
              setErrors(error);
            }
          })
          .catch(() => {
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
    setValues,
    formInitialValues,
  ]);
  return null;
}

export interface IAppFormProps {
  formValidationSchema?: any;
  formInitialValues?: any;
  formButtonLabel?: string;
  formAction?: any;
  haveButton?: boolean;
  children?: any;
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
          <FormikContext
            formAction={formAction}
            formInitialValues={formInitialValues}
          />
          <Form>
            {children}
            <AppButton
              buttonType="submit"
              buttonClassName={
                dirty && isValid ? "ActiveButton" : "InactiveButton"
              }
              buttonLabel={
                isSubmitting ? (
                  <Loader type="ThreeDots" height={6} width={40} />
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
