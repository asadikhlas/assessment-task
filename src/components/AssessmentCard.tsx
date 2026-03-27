import type { Assessment } from '../types/assessment';
import { ProgressMetric } from './ProgressMetric';
import DuplicateIcon from '../assets/duplicate.svg';
import GuideIcon from '../assets/guide.svg';
import CalendarIcon from '../assets/calender.svg';
import SparkIcon from '../assets/spark.svg';
import './AssessmentCard.css';

interface AssessmentCardProps {
  assessment: Assessment;
}

export function AssessmentCard({ assessment }: AssessmentCardProps) {
  return (
    <article className='assessment-card'>
      <div className='assessment-card__top-row'>
        <div className='assessment-card__title-block'>
          <img src={DuplicateIcon} alt='' aria-hidden='true' />

          <div className='assessment-card__title-content'>
            <div className='assessment-card__title-row'>
              <h3 className='assessment-card__title'>{assessment.title}</h3>
              {assessment.hasGuide ? (
                <>
                  <img src={GuideIcon} className='assessment-card__guide-icon' alt='' aria-hidden='true' />
                  <span className='sr-only'>Includes guide</span>
                </>
              ) : null}
            </div>
          </div>
        <div className='assessment-card__meta-block'>
          <div className='assessment-card__scheduled'>
            <img src={CalendarIcon} alt='' aria-hidden='true' />
            <span className='assessment-card__scheduled-text'>
              {assessment.scheduledText}
            </span>
          </div>
        </div>


          <div className='assessment-card__activity'>
            <span className='assessment-card__activity-label'>
              Last Activity
            </span>
            <span className='assessment-card__activity-value'>
              {assessment.lastActivity}
            </span>
          </div>
        </div>

        <button
          type='button'
          className='assessment-card__monitor-button'
          aria-label={`Monitor ${assessment.title}`}
        >
          Monitor
        </button>
      </div>

      <p className='assessment-card__description'>{assessment.description}</p>

      <div
        className={`assessment-card__metrics assessment-card__metrics--multi`}
      >
        {assessment.progress.map((item, index) => (
          <div
            key={`${assessment.id}-${item.label}`}
            className={`assessment-card__metric-cell ${
              index > 0 ? 'assessment-card__metric-cell--bordered' : ''
            }`}
          >
            <ProgressMetric item={item} />
          </div>
        ))}

        {typeof assessment.monitorCount === 'number' ? (
          <div
            className={`assessment-card__insights ${
              assessment.progress.length > 0
                ? 'assessment-card__insights--bordered'
                : ''
            }`}
            aria-label={`${assessment.monitorCount} monitoring insights`}
          >
            <img src={SparkIcon} alt='' aria-hidden='true' />
            <span className='assessment-card__insights-count'>
              {assessment.monitorCount}
            </span>
          </div>
        ) : null}
      </div>
    </article>
  );
}