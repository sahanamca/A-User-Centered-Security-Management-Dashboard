import React from 'react';
import SecurityHeader from './components/SecurityHeader';
import SecurityLogs from './components/SecurityLogs';
import FirewallRules from './components/FirewallRules';

const App = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <SecurityHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <SecurityLogs />
        <FirewallRules />
      </div>
    </div>
  );
};

export default App;
