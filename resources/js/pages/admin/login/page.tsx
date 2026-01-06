import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  Paper,
  Typography,
} from "@mui/material";

import Logo from "@/components/logo/logo";
import NiEyeClose from "@/icons/nexture/ni-eye-close";
import NiEyeOpen from "@/icons/nexture/ni-eye-open";
import { postJson } from "@/lib/http";

const validationSchema = yup.object({
  email: yup.string().required("The field is required").email("Enter a valid email"),
  password: yup.string().required("The field is required"),
});

export default function Page() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, helpers) => {
      setServerError(null);
      setIsSubmitting(true);
      try {
        const response = await postJson("/admin/login", values);

        if (response.status === 422) {
          const data = (await response.json()) as { errors?: Record<string, string[]> };
          if (data.errors) {
            helpers.setErrors(
              Object.fromEntries(
                Object.entries(data.errors).map(([field, messages]) => [field, messages.join(" ")])
              )
            );
          }
          return;
        }

        if (!response.ok) {
          setServerError("Unable to sign in right now. Please try again.");
          return;
        }

        const data = (await response.json()) as { redirect?: string };
        navigate(data.redirect || "/admin/dashboard");
      } catch (error) {
        setServerError("Unable to sign in right now. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    validateOnBlur: false,
    validateOnMount: false,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box className="bg-waves flex min-h-screen w-full items-center justify-center bg-cover bg-center p-4">
      <Paper elevation={3} className="bg-background-paper shadow-darker-xs w-[32rem] max-w-full rounded-4xl py-14">
        <Box className="flex flex-col gap-6 px-8 sm:px-14">
          <Box className="mb-6 flex justify-center">
            <Logo classNameMobile="hidden" />
          </Box>

          <Box className="flex flex-col gap-2 text-center">
            <Typography variant="h1" component="h1">
              Admin Login
            </Typography>
            <Typography variant="body1" className="text-text-secondary">
              Use your administrator account to access the admin dashboard.
            </Typography>
          </Box>

          {serverError && (
            <Alert severity="error">
              <AlertTitle>Sign-in failed</AlertTitle>
              {serverError}
            </Alert>
          )}

          <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
            <FormControl error={Boolean(formik.errors.email)}>
              <FormLabel>Email</FormLabel>
              <Input
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                autoComplete="email"
                placeholder="admin@example.com"
              />
              {formik.errors.email && <FormHelperText>{formik.errors.email}</FormHelperText>}
            </FormControl>

            <FormControl error={Boolean(formik.errors.password)}>
              <FormLabel>Password</FormLabel>
              <Input
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <NiEyeOpen /> : <NiEyeClose />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {formik.errors.password && <FormHelperText>{formik.errors.password}</FormHelperText>}
            </FormControl>

            <Button type="submit" variant="contained" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}
