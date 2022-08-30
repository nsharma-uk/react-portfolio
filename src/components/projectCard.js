import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
//import useMediaQuery from "@mui/material/useMediaQuery";
import LanguageIcon from "@mui/icons-material/Language";

export const ProjectCard = ({ img, title, text, githubRepo, deployedPage }) => {
  //const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} img alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
          aria-label={`GitHub repo for ${title}`}
          startIcon={<GitHub />}
          onClick={githubRepo}
          target="_blank"
          className="icon"
        ></Button>
        <Button
          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
          aria-label={`Deployed page for ${title}`}
          startIcon={<LanguageIcon />}
          onClick={deployedPage}
          target="_blank"
          className="icon"
        ></Button>
      </CardActions>
    </Card>
  );
};
