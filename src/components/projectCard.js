import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import Divider from "@mui/material/Divider";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// export default function RowAndColumnSpacing() {
//   return (
//     <Box sx={{ width: "100%" }}>
//       <Grid
//         container
//         rowSpacing={1}
//         columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//         sx={{ border: "none" }}
//       >
//         <Grid item xs={6}>
//           <Item>1</Item>
//         </Grid>
//         <Grid item xs={6}>
//           <Item>2</Item>
//         </Grid>
//         <Grid item xs={6}>
//           <Item>3</Item>
//         </Grid>
//         <Grid item xs={6}>
//           <Item>4</Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// const styles = {
//   height: 0,
//   paddingTop: "56.25%", // 16:9,
//   marginTop: "30",
// };

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
          // "& :hover": { transform: "scale(1.025)" },
        }}
      >
        <Typography
          gutterBottom
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
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#16123f",
            }}
          >
            {text}
          </Typography>
        </CardContent>
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
