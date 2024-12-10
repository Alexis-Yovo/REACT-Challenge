import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Counters</h1>
      <Counter increment={1} maxValue={20} />
      <Counter increment={2} maxValue={20} />
    </div>
  );
};

export default App;
