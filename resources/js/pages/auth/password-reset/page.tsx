import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Paper,
  Typography,
} from "@mui/material";

import Logo from "@/components/logo/logo";
import { postJson } from "@/lib/http";

export default function Page() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
  });
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFieldError(null);
    setServerError(null);
    setIsSubmitting(true);
    try {
      const response = await postJson("/forgot-password", { email: data.email });

      if (response.status === 422) {
        const result = (await response.json()) as { errors?: Record<string, string[]> };
        setFieldError(result.errors?.email?.join(" ") ?? "The email address is invalid.");
        return;
      }

      if (!response.ok) {
        setServerError("Unable to send reset email right now. Please try again.");
        return;
      }

      navigate("/password-sent");
    } catch (error) {
      setServerError("Unable to send reset email right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                {serverError && (
                  <Alert severity="error">
                    <AlertTitle>Reset failed</AlertTitle>
                    {serverError}
                  </Alert>
                )}
                {fieldError && (
                  <Alert severity="error">
                    <AlertTitle>Check your email</AlertTitle>
                    {fieldError}
                  </Alert>
                )}
                <Box component={"form"} onSubmit={handleSubmit} className="flex flex-col">
                  <FormControl className="outlined" variant="standard" size="small">
                    <FormLabel component="label">Email</FormLabel>
                    <Input
                      placeholder=""
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                  </FormControl>

                  <Box className="flex flex-col gap-2">
                    <Button type="submit" variant="contained" className="mb-4" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Continue"}
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
