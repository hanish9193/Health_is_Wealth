import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import DoctorProfile from './pages/DoctorProfile';
import BookAppointment from './pages/BookAppointment';
import Medicines from './pages/Medicines';
import VideoConsult from './pages/VideoConsult';
import Surgeries from './pages/Surgeries';
import LabTests from './pages/LabTests';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/video-consult" element={<VideoConsult />} />
            <Route path="/surgeries" element={<Surgeries />} />
            <Route path="/lab-tests" element={<LabTests />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;