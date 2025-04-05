import { useState } from 'react';

const rules = [
  {
    name: 'Block suspicious IPs',
    description: 'Automatically block IPs with suspicious activity',
    tag: 'NETWORK'
  },
  {
    name: 'Rate limit login attempts',
    description: 'Prevent brute force attacks',
    tag: 'AUTHENTICATION'
  },
  {
    name: 'Monitor file system changes',
    description: 'Track system file modifications',
    tag: 'SYSTEM'
  }
];

const FirewallRules = () => {
  const [toggle, setToggle] = useState([true, true, false]);

  const handleToggle = (index) => {
    setToggle((prev) => {
      const newToggle = [...prev];
      newToggle[index] = !newToggle[index];
      return newToggle;
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-xl mb-3">Firewall Rules</h2>
      {rules.map((rule, idx) => (
        <div key={idx} className="flex justify-between items-center mb-3">
          <div>
            <p className="font-semibold">{rule.name}</p>
            <p className="text-sm text-gray-600">{rule.description}</p>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded">{rule.tag}</span>
          </div>
          <input type="checkbox" checked={toggle[idx]} onChange={() => handleToggle(idx)} />
        </div>
      ))}
    </div>
  );
};

export default FirewallRules;
