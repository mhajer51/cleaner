import { Link } from "react-router-dom";

import { Box, Button, Paper, Typography } from "@mui/material";

import Logo from "@/components/logo/logo";

export default function Page() {
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

          <Button component={Link} to="/login" variant="contained">
            Go to login
          </Button>

          <Button component={Link} to="/admin/dashboard" variant="outlined" color="grey">
            Preview admin dashboard
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
