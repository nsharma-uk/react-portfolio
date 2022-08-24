import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <Box
      px={{ xs: 3, sm: 5 }}
      py={{ xs: 5, sm: 5 }}
      bgcolor="text.secondary"
      color="white"
    >
      <Container pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
        <Box textAlign="center">
          <Link href="/" color="inherit">
            <GitHubIcon fontSize="large" />
          </Link>
          <Link href="/" color="inherit">
            <LinkedInIcon fontSize="large" />
          </Link>
        </Box>

        <Box textAlign="center">
          Created by Nayan Sharma &copy; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  );
};
