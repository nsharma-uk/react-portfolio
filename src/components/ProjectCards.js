import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { ProjectCardInfo } from "./ProjectInfo";
import { ProjectCard } from "./ProjectCard";
import Typography from "@mui/material/Typography";

export const ProjectCards = () => {
  const projects = ProjectCardInfo;

  return (
    <Box
      sx={{
        paddingTop: "50px",
        backgroundColor: "#abd699",
        textAlign: "center",
      }}
    >
      <Box sx={{ textAlign: "center" }} variant="h4" align="center">
        <Typography
          component="h4"
          variant="h3"
          align="center"
          sx={{ marginTop: 5, marginBottom: 3 }}
          color="#75c9b7"
          fontWeight={600}
        >
          {" "}
          Projects
        </Typography>
      </Box>
      <Stack
        // sx={{ backgroundColor: "  #abd699", textAlign: "center" }}
        direction="row"
        spacing={2}
        justifyContent="center"
        flexWrap="wrap"
      >
        {projects.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </Stack>
    </Box>
  );
};
