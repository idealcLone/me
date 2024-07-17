import Section from '../../../UI/Section';

export default function Education() {
  return (
    <Section title={'Education'}>
      <ul className={'ml-4'}>
        <li className={'list-disc'}>
          <div>
            <strong>Nazarbayev University (2017-2022)</strong>
          </div>
          <p>
            <span className={'font-medium'}>Selected Courses:</span> Data
            Structures, Algorithms, Computer Networks, Operating Systems,
            Software Engineering, Database Systems, Artificial Intelligence,
            Open Source Software
          </p>
        </li>
      </ul>
    </Section>
  );
}
