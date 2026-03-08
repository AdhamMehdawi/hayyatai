import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import PostHogProvider from './providers/PostHogProvider';
import Layout from './components/common/Layout';
import HomePage from './pages/Home';
import HealthLibraryPage from './pages/HealthLibrary';

function App() {
  return (
    <PostHogProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/health-library" element={<HealthLibraryPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </PostHogProvider>
  );
}

export default App;
