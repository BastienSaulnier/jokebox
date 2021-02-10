import React, { useState } from "react";
import "./index.scss";

import { ErrorMessage, Field } from "formik";

export interface IAppInputProps {
  inputPlaceholder?: string;
  inputInfos?: string;
  inputType?: string;
  inputName?: string;
  inputIcon?: any;
  labelId?: string;
  haveInfos?: boolean;
  haveIcon?: boolean;
}

export default function AppInput(props: IAppInputProps) {
  const [inputFocus, setInputFocus] = useState(false);
  const {
    inputPlaceholder,
    inputInfos,
    inputType,
    inputName,
    inputIcon,
    labelId,
    haveInfos,
    haveIcon,
  } = props;

  return (
    <label id={labelId} htmlFor={inputName}>
      <Field>
        {({
          form: { errors, touched, setFieldTouched, handleChange },
          field: { onBlur },
          meta,
        }) => (
          <>
            {haveInfos ? (
              <p className={inputFocus ? "inputInfos" : "inputInfos hidden"}>
                {inputInfos}
              </p>
            ) : null}

            {haveIcon ? (
              <div
                className={
                  touched[inputName] && errors[inputName]
                    ? "inputIcon invalidIcon"
                    : errors[inputName] === undefined && touched[inputName]
                    ? "inputIcon validIcon"
                    : "inputIcon"
                }
              >
                {inputIcon}
              </div>
            ) : null}

            <input
              className={
                touched[inputName] && errors[inputName]
                  ? "input invalid"
                  : touched[inputName] && errors[inputName] === undefined
                  ? "input valid"
                  : "input"
              }
              name={inputName}
              type={inputType}
              placeholder={inputPlaceholder}
              onFocus={() => setInputFocus(true)}
              onBlur={(e) => {
                setInputFocus(false);
                onBlur(e);
              }}
              onChange={(e) => {
                setFieldTouched([inputName]);
                handleChange(e);
              }}
              autoComplete="off"
            />
            <ErrorMessage name={inputName} component="span" />
          </>
        )}
      </Field>
    </label>
  );
}
