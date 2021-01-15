import * as yup from "yup";

export const loginInitialValues = { email: "", password: "" };

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    /*     .matches(/[^\s*].*[^\s*]/g, "This field cannot contain only blankspaces.") */
    .email("Please enter a valid email adress.")
    .required("An email is required."),
  password: yup
    .string()
    .min(8, "Password too short")
    .max(16, "Password too long")
    .required("A password is required."),
});
