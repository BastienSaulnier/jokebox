import * as React from "react";
import "./index.scss";

export interface IAppButtonProps {
  buttonClassName?: string;
  buttonAction?: any;
  buttonLabel?: any;
  buttonType?: any;
}

export default function AppButton(props: IAppButtonProps) {
  const { buttonClassName, buttonAction, buttonLabel, buttonType } = props;

  return (
    <button
      className={buttonClassName}
      type={buttonType}
      onClick={buttonAction}
    >
      {buttonLabel}
    </button>
  );
}
