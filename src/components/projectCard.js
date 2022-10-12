import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import Divider from "@mui/material/Divider";

export const ProjectCard = ({ img, title, text, githubRepo, deployedPage }) => {
  return (
    <Box
      sx={{
        "& :hover": { transform: "scale(1.025)" },
        minWidth: "400px",
      }}
    >
      <Card
        sx={{
          maxWidth: "100%",

          m: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            backgroundColor: "  #c7ddcc",
            textAlign: "center",
            color: "#16123f",
          }}
        >
          {title}
        </Typography>
        <CardMedia
          sx={{ alignItems: "center", objectFit: "contain" }}
          height="140"
          component="img"
          image={img}
          alt={title}
        />
        <Divider />
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ paddingTop: "6px" }}
        >
          <Grid item xs={6}>
            <Link
              href={githubRepo}
              target="_blank"
              color="#16123f"
              sx={{ textDecoration: "none" }}
            >
              <GitHubIcon />
              <Typography variant="body2"> Github Repo</Typography>
            </Link>
          </Grid>

          <Grid item xs={6}>
            <Link
              href={deployedPage}
              target="_blank"
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              <OpenInBrowserIcon />
              <Typography variant="body2">Deployed page</Typography>
            </Link>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
