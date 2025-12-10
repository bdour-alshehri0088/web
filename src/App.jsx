import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Agenda from './pages/Agenda'; // Kept for future use
import Speakers from './pages/Speakers'; // Kept for future use
import ToBeAnnounced from './components/ToBeAnnounced';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<Registration />} />
          {/* Temporarily showing ToBeAnnounced for Agenda and Speakers */}
          <Route path="agenda" element={<ToBeAnnounced title="Conference Agenda" />} />
          <Route path="speakers" element={<ToBeAnnounced title="Keynote Speakers" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
