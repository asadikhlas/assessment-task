import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { AssessmentCard } from './components/AssessmentCard';
import { HeaderBar } from './components/HeaderBar';
import { SearchBar } from './components/SearchBar';
import { SelectField } from './components/SelectField';
import { SkeletonCard } from './components/SkeletonCard';
import { getAssessments } from './services/assessmentService';
import type { Assessment } from './types/assessment';

function App() {
  const [loading, setLoading] = useState(true);
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('scheduled');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    const loadAssessments = async () => {
      try {
        setLoading(true);
        setError('');

        const data = await getAssessments();

        if (!active) return;
        setAssessments(data);
      } catch (err) {
        if (!active) return;
        setAssessments([]);
        setError('Unable to load assessments. Please try again.');
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void loadAssessments();

    return () => {
      active = false;
    };
  }, []);

  const filteredAssessments = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    const filtered = assessments.filter((assessment) => {
      if (!normalizedSearch) return true;
      return [
        assessment.title,
        assessment.description,
        assessment.scheduledText,
        assessment.lastActivity,
      ]
        .join(' ')
        .toLowerCase()
        .includes(normalizedSearch);
    });

    const sorted = [...filtered];

    const parseDate = (value: string) => {
      const time = new Date(value).getTime();
      return Number.isNaN(time) ? 0 : time;
    };

    if (sortValue === 'title') {
      sorted.sort((a, b) =>
        a.title.localeCompare(b.title, undefined, {
          sensitivity: 'base',
          numeric: true,
        }),
      );
    } else if (sortValue === 'activity') {
      sorted.sort((a, b) => parseDate(b.lastActivity) - parseDate(a.lastActivity));
    }

    return sorted;
  }, [assessments, searchValue, sortValue]);

  const resultsAnnouncement = loading
    ? 'Loading assessments'
    : error
      ? error
      : `${filteredAssessments.length} assessment${
          filteredAssessments.length === 1 ? '' : 's'
        } shown`;

  const hasFilters = searchValue.trim().length > 0 || sortValue !== 'scheduled';

  const handleClearControls = () => {
    setSearchValue('');
    setSortValue('scheduled');
  };

  const handleRetry = async () => {
    try {
      setLoading(true);
      setError('');

      const data = await getAssessments();
      setAssessments(data);
    } catch (err) {
      setAssessments([]);
      setError('Unable to load assessments. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='page-shell'>
      <section className='page-card' aria-labelledby='assessments-heading'>
        <div className='page-card__topbar'>
          <HeaderBar />
          <div className='page-card__actions'>
            <SearchBar value={searchValue} onChange={setSearchValue} />
            <SelectField value={sortValue} onChange={setSortValue} />
          </div>
        </div>

        <section aria-live='polite' aria-busy={loading}>
          <h2 id='assessments-heading' className='sr-only'>
            Assessment list
          </h2>
          <p className='sr-only' role='status'>
            {resultsAnnouncement}
          </p>

          {loading ? (
            <div
              className='list-state list-state--loading'
              role='status'
              aria-label='Loading assessments'
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : error ? (
            <div className='error-state' role='alert'>
              <p>{error}</p>
              <button type='button' className='retry-button' onClick={handleRetry}>
                Retry
              </button>
            </div>
          ) : (
            <ul
              className='assessment-list list-state list-state--loaded'
              aria-label='Assessments'
            >
              {filteredAssessments.map((assessment) => (
                <li key={assessment.id}>
                  <AssessmentCard assessment={assessment} />
                </li>
              ))}
            </ul>
          )}

          {!loading && !error && filteredAssessments.length === 0 ? (
            <div className='empty-state' role='status'>
              <p>No assessments matched your search.</p>
              {hasFilters ? (
                <button
                  type='button'
                  className='clear-controls-button'
                  onClick={handleClearControls}
                >
                  Clear filters
                </button>
              ) : null}
            </div>
          ) : null}
        </section>
      </section>
    </main>
  );
}

export default App;