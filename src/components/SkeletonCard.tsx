import './SkeletonCard.css';

interface SkeletonCardProps {
  singleMetric?: boolean;
}

function MetricSkeleton({ single = false }: { single?: boolean }) {
  return (
    <div className='skeleton-metric'>
      <div className='skeleton-metric__row'>
        <div className='skeleton-metric__label'>
          {single ? (
            <>
              <div className='skeleton skeleton-metric__label-line skeleton-metric__label-line--one' />
              <div className='skeleton skeleton-metric__label-line skeleton-metric__label-line--two' />
            </>
          ) : (
            <>
              <div className='skeleton skeleton-metric__label-line skeleton-metric__label-line--two' />
              <div className='skeleton skeleton-metric__label-line skeleton-metric__label-line--one' />
            </>
          )}
        </div>

        <div className='skeleton skeleton-metric__toggle' />

        <div className='skeleton-metric__bars'>
          <div className='skeleton-metric__bar-block'>
            <div className='skeleton skeleton-metric__bar skeleton-metric__bar--primary' />
            <div className='skeleton skeleton-metric__stat skeleton-metric__stat--score' />
          </div>

          {!single && (
            <div className='skeleton-metric__bar-block'>
              <div className='skeleton skeleton-metric__bar skeleton-metric__bar--secondary' />
              <div className='skeleton skeleton-metric__stat skeleton-metric__stat--percent' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MetricPlaceholder() {
  return (
    <div className='skeleton-placeholder'>
      <div className='skeleton-placeholder__row'>
        <div className='skeleton skeleton-placeholder__line skeleton-placeholder__line--short' />
        <div className='skeleton skeleton-placeholder__pill' />
        <div className='skeleton skeleton-placeholder__line skeleton-placeholder__line--medium' />
        <div className='skeleton skeleton-placeholder__line skeleton-placeholder__line--small' />
      </div>
      <div className='skeleton-placeholder__row skeleton-placeholder__row--bottom'>
        <div className='skeleton skeleton-placeholder__line skeleton-placeholder__line--medium' />
        <div className='skeleton skeleton-placeholder__pill' />
        <div className='skeleton skeleton-placeholder__line skeleton-placeholder__line--short' />
        <div className='skeleton skeleton-placeholder__line skeleton-placeholder__line--tiny' />
      </div>
    </div>
  );
}

export function SkeletonCard({ singleMetric = false }: SkeletonCardProps) {
  return (
    <article className='skeleton-card' aria-hidden='true'>
      <div className='skeleton-card__top-row'>
        <div className='skeleton-card__title-block'>
          <div className='skeleton skeleton-card__icon' />

          <div className='skeleton skeleton-card__title' />

          <div className='skeleton-card__meta-block'>
            <div className='skeleton-card__scheduled'>
              <div className='skeleton skeleton-card__calendar-icon' />
              <div className='skeleton skeleton-card__scheduled-text' />
            </div>

            <div className='skeleton-card__activity'>
              <div className='skeleton skeleton-card__activity-label' />
              <div className='skeleton skeleton-card__activity-value' />
            </div>
          </div>
        </div>

        <div className='skeleton skeleton-card__monitor-button' />
      </div>

      <div className='skeleton skeleton-card__description' />

      {singleMetric ? (
        <div className='skeleton-card__metrics skeleton-card__metrics--single-row'>
          <div className='skeleton-card__metric-placeholder'>
            <MetricPlaceholder />
          </div>

          <div className='skeleton-card__metric-placeholder skeleton-card__metric-placeholder--bordered'>
            <MetricPlaceholder />
          </div>

          <div className='skeleton-card__metric-placeholder skeleton-card__metric-placeholder--bordered'>
            <MetricPlaceholder />
          </div>

          <div className='skeleton-card__metric-cell skeleton-card__metric-cell--bordered'>
            <MetricSkeleton single />
          </div>
        </div>
      ) : (
        <div className='skeleton-card__metrics skeleton-card__metrics--multi'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`skeleton-card__metric-cell ${
                index > 0 ? 'skeleton-card__metric-cell--bordered' : ''
              }`}
            >
              <MetricSkeleton single={index === 0} />
            </div>
          ))}

          <div className='skeleton-card__insights skeleton-card__insights--bordered'>
            <div className='skeleton skeleton-card__spark-icon' />
            <div className='skeleton skeleton-card__insights-count' />
          </div>
        </div>
      )}
    </article>
  );
}
