import * as React from "react";
import "./index.scss";

export interface IAppFormProps {
  formSubmitAction?: any;
  formClassName?: string;
  children?: any;
}

export default function AppForm(props: IAppFormProps) {
  const { formSubmitAction, formClassName, children } = props;

  return (
    <form className={formClassName} onSubmit={formSubmitAction}>
      {children}
    </form>
  );
}
