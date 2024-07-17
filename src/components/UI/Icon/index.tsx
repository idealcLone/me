import { ReactNode } from 'react';

type Props = {
  name?: string;
  element: ReactNode;
};

export default function Icon({ name, element }: Props) {
  return (
    <div className={'relative icon'}>
      {element}
      {name && (
        <p
          className={
            'hidden absolute top-0 mt-[100%] left-0 bg-primary text-secondary p-1 rounded-md z-[10]'
          }
        >
          {name}
        </p>
      )}
    </div>
  );
}
