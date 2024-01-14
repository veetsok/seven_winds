export interface ProjectsListProps {
  projects: string;
  activeProject: string | null;
  setActiveProject: (project: string | null) => void;
}
