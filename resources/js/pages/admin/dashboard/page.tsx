import { Link } from "react-router-dom";

import { Box, Button, Paper, Typography } from "@mui/material";

export default function Page() {
  return (
    <Box className="flex flex-col gap-6">
      <Paper className="bg-background-paper shadow-darker-xs rounded-3xl p-6">
        <Typography variant="h1" component="h1" className="mb-2">
          Admin Dashboard
        </Typography>
        <Typography variant="body1" className="text-text-secondary">
          Welcome to the admin area. Manage settings, content, and users from the admin routes.
        </Typography>
      </Paper>

      <Paper className="bg-background-paper shadow-darker-xs rounded-3xl p-6">
        <Typography variant="h6" component="h2" className="mb-4">
          Admin navigation
        </Typography>
        <Box className="flex flex-wrap gap-2">
          <Button component={Link} to="/admin/login" variant="outlined" color="grey">
            Admin login
          </Button>
          <Button component={Link} to="/admin/dashboard" variant="contained">
            Dashboard home
          </Button>
          <Button component={Link} to="/admin/dashboards" variant="outlined" color="grey">
            Dashboards overview
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
