import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ActiveLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

const ActiveLink = ({
  to,
  children,
  className = '',
  activeClassName = 'text-blue-600 font-semibold',
}: ActiveLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`${className} ${isActive ? activeClassName : ''}`}>
      {children}
    </Link>
  );
};

export default ActiveLink;
