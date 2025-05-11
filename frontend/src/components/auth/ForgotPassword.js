import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    // Simulate password reset logic
    alert('Password reset link sent to ' + email);
  };

  return (
    <div className="p-4">
      <h2>Forgot Password</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        className="mb-4 p-2"
      />
      <button onClick={handleReset} className="bg-blue-600 text-white p-2">Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
