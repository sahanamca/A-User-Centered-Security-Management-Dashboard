const logs = [
    {
      level: "MEDIUM",
      description: "Suspicious login attempt detected",
      ip: "192.168.1.100",
      time: "2025-04-04 10:30:00",
      user: null
    },
    {
      level: "HIGH",
      description: "Multiple failed authentication attempts",
      ip: null,
      user: "admin",
      attempts: 5,
      time: "2025-04-04 10:35:00"
    },
    {
      level: "LOW",
      description: "Firewall rules updated successfully",
      time: "2025-04-04 10:40:00"
    }
  ];
  
  const SecurityLogs = () => (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-xl mb-3">Security Logs</h2>
      {logs.map((log, idx) => (
        <div key={idx} className="border p-2 rounded mb-3">
          <p className="font-semibold">{log.description}</p>
          {log.ip && <p>IP: {log.ip}</p>}
          {log.user && <p>User: {log.user}, Attempts: {log.attempts}</p>}
          <p className={`text-${log.level === 'HIGH' ? 'red' : log.level === 'MEDIUM' ? 'yellow' : 'green'}-600 font-bold`}>{log.level}</p>
          <p className="text-sm">{log.time}</p>
        </div>
      ))}
    </div>
  );
  
  export default SecurityLogs;
  