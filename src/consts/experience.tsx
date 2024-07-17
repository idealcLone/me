import { FaNode, FaPython, FaReact, FaVuejs } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';
import { DiMysql, DiPostgresql } from 'react-icons/di';

const iconSize = 24;

export default [
  {
    name: 'Code&Care',
    position: 'Fullstack Developer',
    stack: [
      {
        name: 'React',
        icon: <FaReact size={iconSize} />,
      },
      {
        name: 'Node.js',
        icon: <FaNode size={iconSize} />,
      },
      {
        name: 'NestJS',
        icon: <SiNestjs size={iconSize} />,
      },
      {
        name: 'MySQL',
        icon: <DiMysql size={iconSize} />,
      },
    ],
    from: 'September 2022',
    to: 'Present',
    location: 'Remote',
  },
  {
    name: 'KazDevLab',
    position: 'Frontend Developer',
    stack: [
      {
        name: 'React',
        icon: <FaReact size={iconSize} />,
      },
      {
        name: 'Vue',
        icon: <FaVuejs size={iconSize} />,
      },
    ],
    from: 'February 2022',
    to: 'September 2022',
    location: 'Astana, Kazakhstan',
  },
  {
    name: 'BiteQR',
    position: 'Fullstack Developer',
    stack: [
      {
        name: 'React',
        icon: <FaReact size={iconSize} />,
      },
      {
        name: 'Python',
        icon: <FaPython size={iconSize} />,
      },
      {
        name: 'PostgreSQL',
        icon: <DiPostgresql size={iconSize} />,
      },
    ],
    from: 'May 2020',
    to: 'March 2022',
    location: 'Remote',
  },
];
