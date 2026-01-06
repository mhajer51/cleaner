import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import * as yup from "yup";

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  capitalize,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";

import Logo from "@/components/logo/logo";
import { DEFAULTS } from "@/config";
import NiCheck from "@/icons/nexture/ni-check";
import NiCross from "@/icons/nexture/ni-cross";
import NiCrossSquare from "@/icons/nexture/ni-cross-square";
import { postJson } from "@/lib/http";
import { cn } from "@/lib/utils";

const validationSchema = yup.object({
  email: yup.string().required("The field is required").email("Enter a valid email"),
  password: yup
    .string()
    .required("The field is required")
    .min(8, "Should be at least 8 characters")
    .test("uppercase", "Should be an uppercase and a lowercase letter", (value) => {
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      return hasUpperCase && hasLowerCase;
    })
    .test("symbol", "Should be a special character", (value) => {
      const hasSymbol = /[^A-Za-z 0-9]/g.test(value);
      return hasSymbol;
    }),
  passwordConfirmation: yup
    .string()
    .required("The field is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

type InputErrorProps = {
  title: string;
};

const InputErrorTooltip = ({ title }: InputErrorProps) => {
  return (
    <Box className="relative">
      <Tooltip title={title} arrow className="absolute -top-1.5">
        <Button
          startIcon={<NiCrossSquare size="small" />}
          color="error"
          size="small"
          className="group icon-only bg-transparent! outline-0!"
        ></Button>
      </Tooltip>
    </Box>
  );
};

export default function Page() {
  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasToken = Boolean(token);

  const formik = useFormik({
    initialValues: {
      email: searchParams.get("email") ?? "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema,
    onSubmit: async (values, helpers) => {
      setServerError(null);
      setIsSubmitting(true);
      try {
        const response = await postJson("/reset-password", {
          token,
          email: values.email,
          password: values.password,
          password_confirmation: values.passwordConfirmation,
        });

        if (response.status === 422) {
          const data = (await response.json()) as { errors?: Record<string, string[]> };
          if (data.errors) {
            const formatted = Object.fromEntries(
              Object.entries(data.errors).map(([field, messages]) => [
                field === "password_confirmation" ? "passwordConfirmation" : field,
                messages.join(" "),
              ]),
            );
            helpers.setErrors(formatted);
          }
          return;
        }

        if (!response.ok) {
          setServerError("Unable to reset your password right now. Please try again.");
          return;
        }

        const data = (await response.json()) as { redirect?: string };
        navigate(data.redirect || DEFAULTS.appRoot);
      } catch (error) {
        setServerError("Unable to reset your password right now. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    validateOnBlur: false,
    validateOnMount: false,
  });

  const isPasswordLengthValid = () => {
    return formik.values.password.length >= 8;
  };

  const isPasswordCaseValid = () => {
    const hasUpperCase = /[A-Z]/.test(formik.values.password);
    const hasLowerCase = /[a-z]/.test(formik.values.password);
    return hasUpperCase && hasLowerCase;
  };

  const isPasswordSymbolValid = () => {
    const hasSymbol = /[^A-Za-z 0-9]/g.test(formik.values.password);
    return hasSymbol;
  };

  return (
    <Box className="bg-waves flex min-h-screen w-full items-center justify-center bg-cover bg-center p-4">
      <Paper elevation={3} className="bg-background-paper shadow-darker-xs w-[32rem] max-w-full rounded-4xl py-14">
        <Box className="flex flex-col gap-4 px-8 sm:px-14">
          <Box className="flex flex-col">
            <Box className="mb-14 flex justify-center">
              <Logo classNameMobile="hidden" />
            </Box>

            <Box className="flex flex-col gap-10">
              <Box className="flex flex-col">
                <Typography variant="h1" component="h1" className="mb-2">
                  Reset Password
                </Typography>
                <Typography variant="body1" className="text-text-primary">
                  Get an email about how to reset your password securely.
                </Typography>
              </Box>

              <Box className="flex flex-col gap-5">
                {!hasToken && (
                  <Alert severity="error">
                    <AlertTitle>Reset link invalid</AlertTitle>
                    The password reset link is missing or invalid. Please request a new reset email.
                  </Alert>
                )}
                {serverError && (
                  <Alert severity="error">
                    <AlertTitle>Reset failed</AlertTitle>
                    {serverError}
                  </Alert>
                )}
                <Box
                  component={"form"}
                  onSubmit={(event) => {
                    setSubmitted(true);
                    formik.handleSubmit(event);
                  }}
                  className="flex flex-col"
                >
                  <FormControl className="outlined" variant="standard" size="small">
                    <FormLabel component="label" className="flex flex-row">
                      Email{" "}
                      {formik.touched.email && formik.errors.email && (
                        <InputErrorTooltip title={formik.errors.email} />
                      )}
                    </FormLabel>
                    <Input
                      id="email"
                      name="email"
                      placeholder=""
                      autoComplete="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </FormControl>
                  <FormControl className="outlined" variant="standard" size="small">
                    <FormLabel component="label" className="flex flex-row">
                      Password{" "}
                      {formik.touched.password && formik.errors.password && (
                        <InputErrorTooltip title={formik.errors.password} />
                      )}
                    </FormLabel>
                    <Input
                      id="password"
                      name="password"
                      placeholder=""
                      autoComplete="off"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="password"
                    />
                    <Typography variant="body2" className="text-text-secondary mt-2 inline-block align-middle">
                      <span className="inline">Must be</span>
                      <span
                        className={cn(
                          "mx-1 inline-block h-4 w-4 rounded-md align-text-bottom",
                          isPasswordLengthValid() ? "bg-success text-text-contrast" : "bg-grey-100 text-text-secondary",
                        )}
                      >
                        {isPasswordLengthValid() ? (
                          <NiCheck size={"tiny"}></NiCheck>
                        ) : (
                          <NiCross size={"tiny"}></NiCross>
                        )}
                      </span>
                      <span className={cn("inline font-semibold", isPasswordLengthValid() && "text-success")}>
                        at least 8 characters long,{" "}
                      </span>
                      <span className="inline">must contain</span>
                      <span
                        className={cn(
                          "mx-1 inline-block h-4 w-4 rounded-md align-text-bottom",
                          isPasswordCaseValid() ? "bg-success text-text-contrast" : "bg-grey-100 text-text-secondary",
                        )}
                      >
                        {isPasswordCaseValid() ? <NiCheck size={"tiny"}></NiCheck> : <NiCross size={"tiny"}></NiCross>}
                      </span>
                      <span className={cn("inline font-semibold", isPasswordCaseValid() && "text-success")}>
                        lowercase and uppercase letters,{" "}
                      </span>
                      <span className="inline">must have at least</span>
                      <span
                        className={cn(
                          "mx-1 inline-block h-4 w-4 rounded-md align-text-bottom",
                          isPasswordSymbolValid() ? "bg-success text-text-contrast" : "bg-grey-100 text-text-secondary",
                        )}
                      >
                        {isPasswordSymbolValid() ? (
                          <NiCheck size={"tiny"}></NiCheck>
                        ) : (
                          <NiCross size={"tiny"}></NiCross>
                        )}
                      </span>
                      <span className={cn("inline font-semibold", isPasswordSymbolValid() && "text-success")}>
                        one special character.
                      </span>
                    </Typography>
                  </FormControl>
                  <FormControl className="outlined" variant="standard" size="small">
                    <FormLabel component="label" className="flex flex-row">
                      Confirm password{" "}
                      {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && (
                        <InputErrorTooltip title={formik.errors.passwordConfirmation} />
                      )}
                    </FormLabel>
                    <Input
                      id="passwordConfirmation"
                      name="passwordConfirmation"
                      placeholder=""
                      autoComplete="off"
                      value={formik.values.passwordConfirmation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="password"
                    />
                  </FormControl>

                  {submitted && !formik.isValid && (
                    <Alert severity="error" icon={<NiCrossSquare />} className="neutral bg-background-paper/60! mb-4">
                      <AlertTitle variant="subtitle2">The following inputs have errors!</AlertTitle>
                      {Object.entries(formik.errors).map(([key, value]) => {
                        return (
                          <Box className="flex flex-row gap-0.5" key={crypto.randomUUID()}>
                            <Typography variant="body2" className="text-error">
                              {capitalize(key)}:
                            </Typography>
                            <Typography variant="body2" className="text-text-primary">
                              {value}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Alert>
                  )}

                  <Box className="flex flex-col gap-2">
                    <Button type="submit" variant="contained" className="mb-4" disabled={isSubmitting || !hasToken}>
                      {isSubmitting ? "Updating..." : "Continue"}
                    </Button>
                  </Box>

                  <Typography variant="body2" className="text-text-secondary">
                    By clicking Continue, Sign in with Google, or Sign in with GitHub, you agree to the{" "}
                    <Link target="_blank" to="/terms-and-conditions" className="link-primary link-underline-hover">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link target="_blank" to="/privacy-policy" className="link-primary link-underline-hover">
                      Privacy Policy
                    </Link>
                    .
                  </Typography>
                </Box>
              </Box>
              <Divider className="text-text-secondary my-0 text-sm"></Divider>
              <Box className="flex flex-col">
                <Typography variant="h6" component="h6">
                  Sign in
                </Typography>
                <Typography variant="body1" className="text-text-secondary">
                  If you already have an account, please{" "}
                  <Link to="/login" className="link-primary link-underline-hover">
                    sign in
                  </Link>
                  .
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
