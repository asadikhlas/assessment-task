import { useEffect, useState } from 'react';
import type { ProgressItem } from '../types/assessment';
import { toPercent } from '../utils/format';
import { ProgressBar } from './ProgressBar';
import './ProgressMetric.css';

interface ProgressMetricProps {
  item: ProgressItem;
}

export function ProgressMetric({ item }: ProgressMetricProps) {
  const primaryPercent = toPercent(item.completed, item.total);
  const secondaryPercent = item.secondaryPercent ?? 0;

  const [animatedPrimary, setAnimatedPrimary] = useState(0);
  const [animatedSecondary, setAnimatedSecondary] = useState(0);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setAnimatedPrimary(primaryPercent);
      setAnimatedSecondary(secondaryPercent);
    });

    return () => window.cancelAnimationFrame(id);
  }, [primaryPercent, secondaryPercent]);

  const labelLines = item.label.split('\n');

  return (
    <div className='progress-metric'>
      <div className='progress-metric__top-row'>
        <div className='progress-metric__label'>
          {labelLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>

        <button
          type='button'
          className={`progress-metric__toggle ${
            item.enabled !== false ? 'progress-metric__toggle--on' : ''
          }`}
          aria-label={`${item.label.replace(/\n/g, ' ')} toggle`}
          aria-pressed={item.enabled !== false}
        >
          <span className='progress-metric__toggle-knob' />
        </button>

        <div className='progress-metric__bars'>
          <div className='progress-metric__inner-container'>
            <ProgressBar
              value={animatedPrimary}
              tone='primary'
              className='progress-metric__bar progress-metric__bar--primary'
            />
            <span className='progress-metric__score'>
              {item.completed} / {item.total}
            </span>
          </div>

          {secondaryPercent > 0 &&
          <div className='progress-metric__inner-container'>
          <ProgressBar
            value={animatedSecondary}
            tone='secondary'
            className='progress-metric__bar progress-metric__bar--secondary'
          />
          <span className='progress-metric__percent'>
            {secondaryPercent}%
          </span>
        </div>
          }
        </div>
      </div>
    </div>
  );
}
