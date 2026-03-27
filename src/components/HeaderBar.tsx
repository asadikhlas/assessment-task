import BulbIcon from '../assets/bulb.svg';
import './HeaderBar.css';

export function HeaderBar() {
  return (
    <header className='header-bar'>
      <div className='header-bar__content'>
        <div className='header-bar__title-block'>
          <div className='header-bar__title-row'>
            <h1 className='header-bar__title'>Lessons and Formative Quizzes</h1>
            <button type='button' className='header-bar__link'>
              View Completed
            </button>
          </div>

          <p className='header-bar__subtitle'>
            Click on an objective below to view full details and options.
          </p>
        </div>

        <button
          type='button'
          className='header-bar__guide'
          aria-label='Open lessons and formative quizzes guide'
        >
          <img src={BulbIcon} alt='' />
          <span className='header-bar__guide-text'>
            Lessons &amp; Formative Quizzes Guide
          </span>
        </button>
      </div>
    </header>
  );
}
