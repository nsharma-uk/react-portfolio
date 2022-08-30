import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

// const styles = {
//   height: 0,
//   paddingTop: "56.25%", // 16:9,
//   marginTop: "30",
// };

export const ProjectCard = ({ img, title, text, githubRepo, deployedPage }) => {
  return (
    <Box>
      <Card sx={{ maxWidth: "100%", m: 2 }}>
        <Typography
          gutterBottom
          variant="h6"
          sx={{ backgroundColor: " #abd699", textAlign: "center" }}
        >
          {title}
        </Typography>
        <CardMedia
          sx={{ alignItems: "center" }}
          height="140"
          component="img"
          image={img}
          alt={title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <Link
                href={githubRepo}
                target="_blank"
                color="inherit"
                sx={{ textDecoration: "none" }}
              >
                <GitHubIcon />
                <Typography> Github Repo</Typography>
              </Link>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Link
                href={deployedPage}
                target="_blank"
                color="inherit"
                sx={{ textDecoration: "none" }}
              >
                <OpenInBrowserIcon />
                <Typography>Deployed page</Typography>
              </Link>
            </Item>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
