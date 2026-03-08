import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  style?: React.CSSProperties;
}

function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size: _size = 'medium',
  className = '',
  style
}: ButtonProps) {
  const baseClass = 'pill';
  const variantClass = variant === 'primary' ? 'pill-primary' : '';
  const classes = `${baseClass} ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}

export default Button;
