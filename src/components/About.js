import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import me from "../Assets/images/avatar.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

//import Box from "@mui/material/Box";
export const About = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Stack
      sx={{
        backgroundColor: "#75c9b7",
        direction: "column",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar
        alt="Nayan Sharma"
        src={me}
        sx={{
          width: isMobile ? 190 : 300,
          height: isMobile ? 190 : 300,
          marginTop: 8,
          marginBottom: 4,
        }}
      />

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          marginBottom: 4,
          paddingLeft: 6,
          paddingRight: 6,
        }}
      >
        Hi, I'm Nayan and I'm a full stack developer. I am a former teacher who
        wanted to pursue a new, fresh challenge, specifically a career in web
        development. My technical skill set include MongoDB, Express.js, React,
        Node.js, HTML5, CSS3, Javascript, MySQL and ApolloDB.
      </Typography>
    </Stack>
  );
};
