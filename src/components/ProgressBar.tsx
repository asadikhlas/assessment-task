import './ProgressBar.css';

interface ProgressBarProps {
  value: number;
  tone?: 'primary' | 'secondary';
  className?: string;
}

export function ProgressBar({
  value,
  tone = 'primary',
  className = '',
}: ProgressBarProps) {
  return (
    <div
      className={`progress-bar progress-bar--${tone} ${className}`.trim()}
      aria-hidden="true"
    >
      <div
        className="progress-bar__fill"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}