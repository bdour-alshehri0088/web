import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
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
          <Route path="contact" element={<Contact />} />
          {/* Temporarily showing ToBeAnnounced for Program and Committees */}
          <Route path="program" element={<ToBeAnnounced title="Conference Program" />} />
          <Route path="committees" element={<ToBeAnnounced title="Committees" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
