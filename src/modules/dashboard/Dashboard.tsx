import React from 'react';
import { useUser } from '../../context/UserContext';

const Dashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
