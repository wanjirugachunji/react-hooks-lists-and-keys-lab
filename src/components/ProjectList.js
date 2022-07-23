import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}</div>
    </div>
  );
    const projectItems = projects.map((project) => (
        <ProjectItem
            key={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
        />
    ));
    return (
        <div id="projects">
            <h2>My Projects</h2>
            <div id="project-list">{projectItems}</div>
        </div>
    );
}

export default ProjectList;