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
      sx={{ display: "flex" }}
    >
      <Container pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
        <Box textAlign="center">
          <Link
            href="https://github.com/nsharma-uk"
            target="_blank"
            color="inherit"
            sx={{
              pr: 4,
              "& :hover": { color: "#ffe26a" },
            }}
          >
            <GitHubIcon fontSize="large" />
          </Link>
          <Link
            href="https://linkedin.com/in/nsharma-uk"
            target="_blank"
            color="inherit"
            sx={{ "& :hover": { color: "#ffe26a" } }}
          >
            <LinkedInIcon fontSize="large" />
          </Link>
        </Box>

        <Box
          textAlign="center"
          sx={{
            textAlign: "center",
            mt: 3,
          }}
        >
          Created by Nayan Sharma &copy; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  );
};
