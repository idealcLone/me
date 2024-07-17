import { ReactNode } from 'react';

type Props = {
  title?: string;
  children?: ReactNode;
};

export default function Section({ title, children }: Props) {
  return (
    <section
      className={
        'p-2 shadow-sm bg-secondary shadow-primary text-sm rounded-sm flex flex-col gap-4'
      }
    >
      {title && <h2 className={'text-center'}>{title}</h2>}
      {children}
    </section>
  );
}
