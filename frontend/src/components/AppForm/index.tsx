import * as React from "react";
import "./index.scss";

export interface IAppFormProps {
  formClassName?: string;
  formAction?: any;
  children?: any;
}

export default function AppForm(props: IAppFormProps) {
  const { formClassName, formAction, children } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await formAction();
  };

  return (
    <form className={formClassName} onSubmit={(e) => handleSubmit(e)}>
      {children}
    </form>
  );
}
