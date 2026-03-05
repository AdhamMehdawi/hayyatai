import { useEffect } from 'react';
import LearnConditions from '../components/sections/LearnConditions';

function HealthLibraryPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      <LearnConditions />
    </div>
  );
}

export default HealthLibraryPage;
