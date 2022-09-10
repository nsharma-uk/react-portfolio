import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { ProjectCardInfo } from "../components/ProjectInfo";
import { ProjectCard } from "../components/ProjectCard";

export const ProjectCards = () => {
  const projects = ProjectCardInfo;

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "#75c9b7",
        textAlign: "center",
      }}
    >
      <Box sx={{ textAlign: "center" }} variant="h4" align="center">
        <Typography
          component="h3"
          variant="h3"
          align="center"
          sx={{ marginTop: 10, marginBottom: 3 }}
          color="#c7ddcc"
          fontWeight={600}
        >
          {" "}
          Projects
        </Typography>
      </Box>
      <Stack
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
