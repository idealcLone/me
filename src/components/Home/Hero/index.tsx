import Avatar from '../../UI/Avatar';
import socials from '../../../consts/socials.tsx';

export default function Hero() {
  return (
    <div
      className={
        'bg-gradient-primary text-secondary w-full h-full max-h-screen flex justify-center items-center sticky left-0 top-0'
      }
    >
      <div className={'flex flex-col gap-6 items-center justify-center'}>
        <Avatar size={'lg'} />
        <div className={'font-medium text-center flex flex-col gap-2'}>
          <h1 className={'text-xl'}>Eldar Mussagali</h1>
          <h2 className={'text-lg'}>Fullstack Developer</h2>
        </div>
        <ul className={'flex gap-6 items-center'}>
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  'flex flex-col gap-2 justify-center items-center hover:underline'
                }
              >
                {social.icon}
                <div>{social.name}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
