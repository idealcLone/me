import Section from '../../../UI/Section';
import experience from '../../../../consts/experience.tsx';
import Icon from '../../../UI/Icon';

export default function Experience() {
  return (
    <Section title={'Experience'}>
      <ul className={'flex flex-col gap-4 list-disc ml-4'}>
        {experience.map((job) => (
          <li key={job.name}>
            <div className={'font-semibold'}>
              {job.name} ({job.from} - {job.to})
            </div>
            <div className={'font-medium'}>{job.position}</div>
            <div>{job.location}</div>
            <ul className={'flex gap-2 mt-2'}>
              {job.stack.map((technology, index) => (
                <li key={index}>
                  <Icon element={technology.icon} name={technology.name} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
