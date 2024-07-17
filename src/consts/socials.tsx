import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const iconSize = 32;

export default [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/eldar-mussagali-b64006211/',
    icon: <FaLinkedin size={iconSize} />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/idealcLone',
    icon: <FaGithub size={iconSize} />,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/idealcLone',
    icon: <FaTelegram size={iconSize} />,
  },
];
