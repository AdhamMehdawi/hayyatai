import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function Container({ children, className = '', style }: ContainerProps) {
  return (
    <div className={`container ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}

export default Container;
