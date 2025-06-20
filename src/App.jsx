import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  useEffect(() => {
    document.title = "Dr. Jane Smith | Cardiology Specialist";
  }, []);

  return <HomePage />;
}

export default App
