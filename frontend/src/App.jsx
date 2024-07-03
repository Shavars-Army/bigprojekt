import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ' + error);
      });
  }, []);

  useEffect(() => {
    console.log(data); // This will log the updated data whenever it changes
  }, [data]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={
            <div>
              <h1>MySQL Data from AWS RDS</h1>
              <ul>
                {data.map(item => (
                  <li key={item.id}>{item.user}</li>
                ))}
              </ul>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
