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
      <div></div>
      <Container>
        <Typography variant="h5" gutterBottom>
          Hi, I'm Nayan and I'm a full stack developer. I am a former teacher
          who wanted to pursue a new, fresh challenge, specifically a career in
          web development. Currently, I am thoroughly enjoying learning a Full
          Stack Web development bootcamp course at the Birmingham University.
        </Typography>
      </Container>
    </Box>
  );
};
