import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Partners from './pages/Partners';
import FAQ from './pages/FAQ';
import WaitlistModal from './components/WaitlistModal';
import { WaitlistProvider, useWaitlist } from './contexts/WaitlistContext';
import './App.css';

function AppContent() {
  const { isWaitlistModalOpen, closeWaitlistModal } = useWaitlist();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <WaitlistModal 
          isOpen={isWaitlistModalOpen} 
          onClose={closeWaitlistModal} 
        />
      </div>
    </Router>
  );
}

function App() {
  return (
    <WaitlistProvider>
      <AppContent />
    </WaitlistProvider>
  );
}

export default App;
