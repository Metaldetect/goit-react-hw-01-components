import React from 'react';
import Profile from './components/Profile-card';
import Statistics from './components/Statistics';

import data from './data/data.json';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
