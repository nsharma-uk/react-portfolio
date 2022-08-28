import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
export const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#75c9b7",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography variant="h5" gutterBottom>
          Hi, I'm Nayan and I'm a full stack developer. I am a former teacher
          who wanted to pursue a new, fresh challenge, specifically a career in
          web development. My technical skill set include MongoDB, Express.js,
          React, Node.js, HTML5, CSS3, Javascript, MySQL and ApolloDB.
        </Typography>
      </Container>
    </Box>
  );
};
