import { skills } from '../data';

import Card from './Card';
import Title from './Title';

const Skills = () => {
  return (
    <section className='py-20 aligning' id='skills'>
      <Title text={'Tech Stack'}/>
      <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {skills.map((skill) => (
          <Card key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
