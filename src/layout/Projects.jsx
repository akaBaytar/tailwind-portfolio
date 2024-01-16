import Title from '../components/Title';
import Project from '../components/Project';

import { projects } from '../data/index';

const Projects = () => {
  return (
    <section className='py-20 aligning' id='projects'>
      <Title text={'Web Creations'} />
      <div className='py-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
