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

  useEffect(() => {
    let active = true;

    const loadAssessments = async () => {
      setLoading(true);
      const data = await getAssessments();
      if (!active) return;
      setAssessments(data);
      setLoading(false);
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
      return [assessment.title, assessment.description, assessment.scheduledText, assessment.lastActivity]
        .join(' ')
        .toLowerCase()
        .includes(normalizedSearch);
    });

    const sorted = [...filtered];

    if (sortValue === 'title') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === 'activity') {
      sorted.sort((a, b) => b.lastActivity.localeCompare(a.lastActivity));
    }

    return sorted;
  }, [assessments, searchValue, sortValue]);

  return (
    <main className="page-shell">
      <section className="page-card" aria-labelledby="assessments-heading">
        <div className="page-card__topbar">
          <HeaderBar />
          <div className="page-card__actions">
            <SearchBar value={searchValue} onChange={setSearchValue} />
            <SelectField value={sortValue} onChange={setSortValue} />
          </div>
        </div>

        <section aria-live="polite" aria-busy={loading}>
          <h2 id="assessments-heading" className="sr-only">
            Assessment list
          </h2>

          {loading ? (
            <div className="list-state list-state--loading">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : (
            <ul className="assessment-list list-state list-state--loaded">
              {filteredAssessments.map((assessment) => (
                <li key={assessment.id}>
                  <AssessmentCard assessment={assessment} />
                </li>
              ))}
            </ul>
          )}

          {!loading && filteredAssessments.length === 0 ? (
            <p className="empty-state">No assessments matched your search.</p>
          ) : null}
        </section>
      </section>
    </main>
  );
}

export default App;