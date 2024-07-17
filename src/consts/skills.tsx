import {
  FaAws,
  FaDocker,
  FaGit,
  FaGoogle,
  FaJira,
  FaNode,
  FaReact,
} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import {
  DiCss3Full,
  DiHtml5,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiNginx,
  DiPostgresql,
  DiRedis,
} from 'react-icons/di';
import { SiNestjs, SiTypescript } from 'react-icons/si';

const iconSize = 40;

export default [
  {
    title: 'Frontend',
    stack: [
      {
        name: 'CSS',
        icon: <DiCss3Full size={iconSize} />,
      },
      {
        name: 'HTML',
        icon: <DiHtml5 size={iconSize} />,
      },
      {
        name: 'Javascript',
        icon: <DiJavascript size={iconSize} />,
      },
      {
        name: 'Typescript',
        icon: <SiTypescript size={iconSize} />,
      },
      {
        name: 'React',
        icon: <FaReact size={iconSize} />,
      },
      {
        name: 'Next.js',
        icon: <RiNextjsFill size={iconSize} />,
      },
    ],
  },
  {
    title: 'Backend',
    stack: [
      {
        name: 'Node.js',
        icon: <FaNode size={iconSize} />,
      },
      {
        name: 'NestJS',
        icon: <SiNestjs size={iconSize} />,
      },
    ],
  },
  {
    title: 'Database',
    stack: [
      {
        name: 'MySQL',
        icon: <DiMysql size={iconSize} />,
      },
      {
        name: 'PostgreSQL',
        icon: <DiPostgresql size={iconSize} />,
      },
      {
        name: 'MongoDB',
        icon: <DiMongodb size={iconSize} />,
      },
      {
        name: 'Redis',
        icon: <DiRedis size={iconSize} />,
      },
    ],
  },
  {
    title: 'DevOps',
    stack: [
      {
        name: 'Docker',
        icon: <FaDocker size={iconSize} />,
      },
      {
        name: 'Nginx',
        icon: <DiNginx size={iconSize} />,
      },
      {
        name: 'AWS',
        icon: <FaAws size={iconSize} />,
      },
    ],
  },
  {
    title: 'Tools',
    stack: [
      {
        name: 'Jira',
        icon: <FaJira size={iconSize} />,
      },
      {
        name: 'Git',
        icon: <FaGit size={iconSize} />,
      },
      {
        name: 'Google',
        icon: <FaGoogle size={iconSize} />,
      },
    ],
  },
];
