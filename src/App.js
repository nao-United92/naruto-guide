import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const apiUrl = 'http://localhost:3000/character';

    const result = await axios.get(apiUrl);
  };
  return <div className="App"></div>;
}

export default App;
