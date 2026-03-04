import { ReactNode } from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string | ReactNode;
  subtitle?: string;
  labelColor?: string;
  titleColor?: string;
  titleStyle?: React.CSSProperties;
}

function SectionHeader({
  label,
  title,
  subtitle,
  labelColor,
  titleColor,
  titleStyle
}: SectionHeaderProps) {
  return (
    <>
      {label && (
        <div className="sec-label" style={{ color: labelColor }}>
          {label}
        </div>
      )}
      <div className="sec-title" style={{ ...titleStyle, color: titleColor }}>
        {title}
      </div>
      {subtitle && (
        <p style={{ color: 'var(--rose)', fontSize: '0.95rem', maxWidth: 520, marginBottom: '3rem' }}>
          {subtitle}
        </p>
      )}
    </>
  );
}

export default SectionHeader;
