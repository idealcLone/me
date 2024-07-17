import { cls } from '../../../utils/class.ts';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  border?: 'primary' | 'secondary';
};

export default function Avatar({ size = 'md', border = 'secondary' }: Props) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-10';
      case 'md':
        return 'w-20';
      default:
        return 'w-40';
    }
  };

  const borderClass =
    border === 'primary' ? 'border-primary' : 'border-secondary';

  return (
    <div
      className={cls(
        'rounded-full aspect-square border-[1px] border-secondary',
        borderClass,
        getSizeClasses()
      )}
    ></div>
  );
}
