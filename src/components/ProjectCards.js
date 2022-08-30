import Stack from "@mui/material/Stack";

import { ProjectCardInfo } from "./ProjectInfo";
import { ProjectCard } from "./ProjectCard";

export const ProjectCards = () => {
  const projects = ProjectCardInfo;
  console.log("projects = ", projects);
  return (
    <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
      {projects.map((project) => {
        return <ProjectCard {...project} />;
      })}
    </Stack>
  );
};
