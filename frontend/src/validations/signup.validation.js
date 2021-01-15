import * as yup from "yup";

export const signUpInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  passwordCheck: "",
};
export const signUpSchema = yup.object().shape({
  firstname: yup.string().required("This field is required."),
  lastname: yup.string().required("This field is required."),
  username: yup.string().required("This field is required."),
  email: yup
    .string()
    .email("Please enter a valid email adress.")
    .required("This field is required."),
  password: yup.string().required("This field is required."),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match.")
    .required("This field is required."),
});
