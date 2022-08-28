import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GitHub from "@mui/icons-material/GitHub";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProjectCardInfo = [
  {
    img: "",
    title: "Note Taker App",
    text: "A note-taking app using the Express framework",
    deployedPage: "https://glacial-scrubland-19662.herokuapp.com/",
    githubRepo: "https://github.com/nsharma-uk/note-taker",
  },

  {
    img: "",
    title: "Weather Dashboard",
    text: "Search for a city to see current weather conditions and a 5 day forecast",
    deployedPage: "https://nsharma-uk.github.io/weather-dashboard/",
    githubRepo: "https://github.com/nsharma-uk/weather-dashboard",
  },

  {
    img: "",
    title: "E-Commerce Backend",
    text: "A back end for an e-commerce site, configures a working Express.js API to use Sequelize to interact with a MySQL database.",
    deployedPage: "",
    githubRepo: "https://github.com/nsharma-uk/e-commerce-backend",
  },

  {
    img: "",
    title: "Day Planner",
    text: "A simple calendar application that allows a user to save events for each hour of the day",
    deployedPage: "https://nsharma-uk.github.io/day-planner/",
    githubRepo: "https://github.com/nsharma-uk/day-planner",
  },
];


export const ProjectCard = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return()
}:
