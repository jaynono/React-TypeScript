import React from 'react';
import Login from './Login';
import Register from './Register';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to METN Login</h1>
      <Login />
      <Register/>
    </div>
  );
};

export default App;
