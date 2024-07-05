import React, { useState, useEffect } from 'react';

const Home = ({ user }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
   
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
      
    }
    fetchData();
   // else(alert("hallo"))
    
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/data`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      
      // Modify the date format for display if necessary
      const modifiedData = jsonData.map(item => ({
        ...item,
        startdate: new Date(item.startdate).toLocaleDateString(),
        enddate: new Date(item.enddate).toLocaleDateString(),
        // Add other fields as needed
      }))
      //.filter(item => item.participant_email === userEmail);

      setData(modifiedData);
     // setUserEmail(null)
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state if needed
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div>
      <div>
        <h1>Welcome to the Home Page, <span className="user-name">{user}</span>!</h1>
        
      </div>
      <h2>Your Conferences</h2>
      <ul>
      {data.map((item) => (
  item.participant_email === userEmail &&user && (
    <li key={item.id}>
      ID: {item.id} <br />
      Description: {item.description} <br />
      Start Date: {item.startdate} <br />
      End Date: {item.enddate} <br />
      Start Time: {item.starttime} <br />
      End Time: {item.endtime} <br />
      Location: {item.location} <br />
      Link: {item.link} <br />
      Participant Email: {item.participant_email} <br />
    </li>
  )
))}

      </ul>
    </div>
  );
};

export default Home;
