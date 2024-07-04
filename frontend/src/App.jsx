import React from 'react';
import Register from "./Register";
import Signin from './Signin';
//import Amplify from 'aws-amplify';
//import awsconfig from './aws-exports';

//Amplify.configure(awsconfig);

//import Amplify from 'aws-amplify';
//import awsExports from './UserPool';

//Amplify.configure(awsExports);

function App() {
  return (
    <>
      <div>
        <h1>MySQL Data from AWS RDS</h1>
        {/* Displaying MySQL data would require fetching it from your server */}
        {/* Use Axios or Fetch to fetch data and display it here */}
      </div> 
      
     <Signin/>
    </>
  );
}

export default App;
