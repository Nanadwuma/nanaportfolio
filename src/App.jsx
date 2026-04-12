import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ThesisPage from './pages/ThesisPage';
import LeadershipSkillsPage from './pages/LeadershipSkillsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/thesis" element={<ThesisPage />} />
      <Route path="/leadership-skills" element={<LeadershipSkillsPage />} />
    </Routes>
  );
}

export default App;
