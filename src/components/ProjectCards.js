import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { ProjectCardInfo } from "./ProjectInfo";
import { ProjectCard } from "./ProjectCard";
// import { Typography } from "@mui/material";

export const ProjectCards = () => {
  const projects = ProjectCardInfo;

  return (
    <Box sx={{ backgroundColor: "#abd699", textAlign: "center" }}>
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
