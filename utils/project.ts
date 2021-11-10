import fs from 'fs';
import matter from 'gray-matter';

interface Tag {
  type: string;
  text: string;
}

export interface Project {
  name: string;
  date: string;
  description: string;
  tags: Tag[];
  link: string;
  repo: string;
}

const getProjects = (): Project[] => {
  const directory = 'projects/';
  const files = fs.readdirSync(directory);

  const projects = files.map((file) => {
    const markdown = fs.readFileSync(directory + file).toString();
    const { data } = matter(markdown);

    return data;
  });

  projects.sort((a, b) => b.date - a.date);

  return projects.map((project) => ({
    ...project,
    date: project.date.toString(),
  })) as Project[];
};

export default getProjects;
