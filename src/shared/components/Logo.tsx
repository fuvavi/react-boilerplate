import { Link } from 'react-router-dom';
import LogoImg from '@/assets/logo-fuvavi.svg?react';

interface Props {
  className?: string;
  width?: number;
  height?: number;
}
const Logo = ({ className, width = 24, height = 24 }: Props) => {
  return (
    <Link to="/">
      <LogoImg className={className} width={width} height={height} />
    </Link>
  );
};

export default Logo;
