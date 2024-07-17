import Section from '../../../UI/Section';
import skills from '../../../../consts/skills.tsx';

export default function Skills() {
  return (
    <Section title={'Skills'}>
      <div
        className={
          'flex flex-wrap gap-10 text-center justify-center content-center'
        }
      >
        {skills.map((skill) => (
          <div className={'flex w-1/4 md:w-1/3 flex-col gap-4 items-center'}>
            <h3>{skill.title}</h3>
            <ul className={'flex gap-4 items-center flex-wrap justify-center'}>
              {skill.stack.map((technology) => (
                <li key={technology.name}>{technology.icon}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
